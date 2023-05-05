import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthScreen } from '../screens/AuthScreen';
import { MainStackNavigator } from './MainStackNavigator';

export const AppNavigator = () => {
    const user = 1;

    return (
        <NavigationContainer>
            {user ? <MainStackNavigator /> : <AuthScreen />}
        </NavigationContainer>

    );
};
