import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Button, SegmentedButtons, Text } from 'react-native-paper';

export const MapScreen = () => {

    const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // 現在選択中のボタンの値を管理する
    const [selectedButton, setSelectedButton] = useState<string>('');

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            const location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);

        })();
    }, []);



    return (
        <SafeAreaView style={{ flex: 1 }}>

            {
                // 現在位置が取得できない場合はエラーを表示する
                location !== null ?
                    <MapView
                        style={styles.mapview}
                        initialRegion={{ latitude: location.latitude, longitude: location.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                        showsUserLocation={true}
                        showsCompass={true}
                    >
                    </MapView>
                    : <Text>現在位置を取得できませんでした</Text>
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
        </SafeAreaView >
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
    }
});