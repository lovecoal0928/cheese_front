import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthScreen } from '../screens/AuthScreen';
import { MainTabNavigator } from './MainTabNavigator';

export const AppNavigator = () => {
    const user = 1;

    return (
        <NavigationContainer>
            {user ? <MainTabNavigator /> : <AuthScreen />}
        </NavigationContainer>

    );
};
