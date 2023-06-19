import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SegmentedButtons, Text } from 'react-native-paper';
import { useLocationInformation } from '../hooks/useLocationInformation';

export const MapScreen = () => {
    const { location } = useLocationInformation();
    const [errorMsg, setErrorMsg] = useState<string>();

    // 現在選択中のボタンの値を管理する
    const [selectedButton, setSelectedButton] = useState<string>('');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                // 現在位置が取得できない場合はエラーを表示する
                location ? (
                    <MapView
                        style={styles.mapview}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        showsUserLocation={true}
                        showsCompass={true}
                    >
                        <Marker coordinate={location} />
                    </MapView>
                ) : (
                    <Text>現在位置を取得できませんでした</Text>
                )
            }
            <SegmentedButtons
                value={selectedButton}
                onValueChange={(value) => setSelectedButton(value)}
                buttons={[
                    { label: 'すべて', value: 'all' },
                    { label: 'おすすめ', value: 'recommend' },
                ]}
                style={styles.selectedBtn}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mapview: {
        flex: 1,
    },
    selectedBtn: {
        position: 'absolute',
        top: 80,
        left: 0,
        zIndex: 100,
        width: 240,
        padding: 4,
    },
});
