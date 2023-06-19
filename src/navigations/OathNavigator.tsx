import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignInScreen } from '../screens/SignInScreen';

const oathStack = createStackNavigator();

export const OathNavigator = () => {
    return <oathStack.Navigator>
        <oathStack.Screen name='Auth' component={<SignInScreen } />

    </oathStack.Navigator>;
};
