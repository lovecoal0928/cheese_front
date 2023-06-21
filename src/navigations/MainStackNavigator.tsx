import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainTabNavigator } from './MainTabNavigator';
import { SubmitScreen } from '../screens/SubmitScreen';
import { NewProfileScreen } from '../screens/NewProfileScreen';

const rootStack = createStackNavigator();

type Props = {
    initialRouteName?: string;
};

export const MainStackNavigator = ({ initialRouteName = 'Main' }: Props) => {
    return (
        <rootStack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{
                headerShown: false,
            }}
        >
            <rootStack.Screen name="Main" component={MainTabNavigator} />
            <rootStack.Screen name="Submit" component={SubmitScreen} />
            <rootStack.Screen
                name={'NewProfile'}
                component={NewProfileScreen}
            />
        </rootStack.Navigator>
    );
};
