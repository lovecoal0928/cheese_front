import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MapScreen } from '../screens/MapScreen';
import { HomeScreen } from '../screens/HomeScreen';
const Tab = createMaterialBottomTabNavigator();

export const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Submit"
                component={MapScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-settings" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Route"
                component={MapScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-settings" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="MyPage"
                component={MapScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
