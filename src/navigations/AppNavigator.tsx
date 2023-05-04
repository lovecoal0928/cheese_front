import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthScreen } from 'screens/AuthScreen';

export const AppNavigator = () => {
    const user = 1;

    return (
        <NavigationContainer>
            {user ? <AppNavigator /> : <AuthScreen />}
        </NavigationContainer>

    );
};
