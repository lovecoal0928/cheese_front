import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export const MapScreen = () => {
    // 現在地を管理する
    const [currentLocation, setCurrentLocation] = useState({
        latitude: 0,
        longitude: 0,
    });




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                style={styles.mapview}
                initialRegion={{ latitude: 35.681236, longitude: 139.767125, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
            >

            </MapView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mapview: {
        flex: 1,
    }
});