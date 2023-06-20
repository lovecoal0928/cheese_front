import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MapScreen } from '../screens/MapScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { MyPageScreen } from '../screens/MyPageScreen';
import { PAGE_NAVIGATION } from '../constants/pageNavigation';
const Tab = createMaterialBottomTabNavigator();

export const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: '#fff' }}
        >
            <Tab.Screen
                name={PAGE_NAVIGATION.HOME}
                component={HomeScreen}
                options={{
                    tabBarLabel: 'ホーム',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={PAGE_NAVIGATION.MAP}
                component={MapScreen}
                options={{
                    tabBarLabel: 'マップ',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="bell"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="dummy"
                component={MapScreen}
                options={{
                    tabBarLabel: '投稿',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-settings"
                            color={color}
                            size={26}
                        />
                    ),
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('Submit');
                    },
                })}
            />
            <Tab.Screen
                name={PAGE_NAVIGATION.ROUTE}
                component={MapScreen}
                options={{
                    tabBarLabel: 'ルート一覧',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-settings"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={PAGE_NAVIGATION.MY_PAGE}
                component={MyPageScreen}
                options={{
                    tabBarLabel: 'マイページ',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
