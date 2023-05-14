import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export const MapScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView style={styles.mapview} >

            </MapView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mapview: {
        flex: 1,
    }
});