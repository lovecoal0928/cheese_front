import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { AppNavigator } from './src/navigations/AppNavigator';


export default function App() {
    const theme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
            ...DefaultTheme.colors,
            primary: '#333',
            primarycontainer: '#000',
            secondary: '#FFEDAF',
            background: '#f4f4f4',
        }
    };

    return (
        <PaperProvider theme={theme}>
            <AppNavigator />
        </PaperProvider>
    );
}
