import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';

const oathStack = createStackNavigator();

export const OathNavigator = () => {
    return (
        <oathStack.Navigator
            initialRouteName="ログイン"
            screenOptions={{
                headerShown: false,
            }}
        >
            <oathStack.Screen name="ログイン" component={SignInScreen} />
            <oathStack.Screen
                name="アカウント作成"
                component={SignUpScreen}
                options={{
                    presentation: 'modal',
                    headerShown: true,
                }}
            />
        </oathStack.Navigator>
    );
};
