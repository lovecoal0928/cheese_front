import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { PAGE_NAVIGATION } from '../constants/pageNavigation';

const oathStack = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <oathStack.Navigator
            initialRouteName={PAGE_NAVIGATION.SIGN_IN}
            screenOptions={{
                headerShown: false,
            }}
        >
            <oathStack.Screen name={'SignIn'} component={SignInScreen} />
            <oathStack.Screen
                name={'SingUp'}
                component={SignUpScreen}
                options={{
                    presentation: 'modal',
                    headerShown: true,
                }}
            />
        </oathStack.Navigator>
    );
};
