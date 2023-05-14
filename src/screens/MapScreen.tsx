import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

type ILocation = {
    latitude: number;
    longitude: number;
};

export const MapScreen = () => {

    const [location, setLocation] = useState<ILocation | undefined>(undefined);

    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            setLocation({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
            });
        }, error => console.log(error), { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
        );
    }, []);


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