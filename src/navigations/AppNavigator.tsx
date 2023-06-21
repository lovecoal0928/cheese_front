import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainStackNavigator } from './MainStackNavigator';
import { SignInScreen } from '../screens/SignInScreen';

import { useAuthUser } from '../state/authUser';

export const AppNavigator = () => {
    const { authUser } = useAuthUser();

    return (
        <NavigationContainer>
            {authUser ? <MainStackNavigator /> : <SignInScreen />}
        </NavigationContainer>
    );
};
