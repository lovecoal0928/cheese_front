import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export const MapScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <MapView style={styles.mapview} >

            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapview: {
        flex: 1,
    }
});