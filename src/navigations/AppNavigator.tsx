import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthScreen } from '../screens/AuthScreen';
import { MainStackNavigator } from './MainStackNavigator';
import { SignInScreen } from '../screens/SignInScreen';
import { OathNavigator } from './OathNavigator';

export const AppNavigator = () => {
    const user = 1;

    return (
        <NavigationContainer>
            {user ? <MainStackNavigator /> : <OathNavigator />}
        </NavigationContainer>
    );
};
