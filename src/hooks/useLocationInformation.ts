import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export const useLocationInformation = () => {
    const [location, setLocation] = useState<Location.LocationObjectCoords>();

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            const location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
        })();
    }, []);

    // TODO: 位置情報をonにするよように促す処理を書く？

    return {
        location,
    };
};
