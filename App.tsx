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
            onPrimary: '#fff',
            primaryContainer: '#000',
            secondary: '#FFEDAF',
            secondaryContainer: '#fff',
            background: '#f4f4f4',
            surfaceVariant: '#fff'

        }
    };

    return (
        <PaperProvider theme={theme}>
            <AppNavigator />
        </PaperProvider>
    );
}
