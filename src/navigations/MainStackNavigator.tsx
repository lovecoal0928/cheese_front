import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainTabNavigator } from './MainTabNavigator';
import { SubmitScreen } from '../screens/SubmitScreen';
import { Button } from 'react-native-paper';
import { PAGE_NAVIGATION } from '../constants/pageNavigation';

const rootStack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <rootStack.Navigator
            initialRouteName={PAGE_NAVIGATION.MAIN}
            screenOptions={{
                headerShown: false,
                presentation: 'modal',
            }}
        >
            <rootStack.Screen
                name={PAGE_NAVIGATION.MAIN}
                component={MainTabNavigator}
                options={{
                    title: '',
                }}
            />
            <rootStack.Screen
                name={PAGE_NAVIGATION.SUBMIT}
                component={SubmitScreen}
                options={{
                    title: '',
                }}
            />
        </rootStack.Navigator>
    );
};
