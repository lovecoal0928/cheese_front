import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainTabNavigator } from './MainTabNavigator';

const rootStack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <rootStack.Navigator
            initialRouteName='Main'
            screenOptions={{
                headerShown: false
            }}
        >
            <rootStack.Screen name='Main' component={MainTabNavigator} />
            <rootStack.Screen name='Submit' component={MainTabNavigator} />
        </rootStack.Navigator>
    );
};
