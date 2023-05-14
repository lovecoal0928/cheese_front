import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainTabNavigator } from './MainTabNavigator';
import { SubmitScreen } from '../screens/SubmitScreen';
import { Button } from 'react-native-paper';

const rootStack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <rootStack.Navigator
            initialRouteName='Main'
            screenOptions={{
                headerShown: false,
                presentation: 'modal',
            }}
        >
            <rootStack.Screen name='Main' component={MainTabNavigator}
                options={{
                    title: '戻る'
                }}
            />
            <rootStack.Screen name='Submit' component={SubmitScreen}
                options={{
                    headerShown: true,
                    title: '新規投稿',
                    headerRight: () =>
                        <Button textColor='#0098fd' onPress={() => console.log('')} > 保存</Button>,
                }}
            />
        </rootStack.Navigator >
    );
};
