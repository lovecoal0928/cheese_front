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
            primary: '#3498db',
            accent: '#f1c40f',
        }
    };

    return (
        <PaperProvider theme={theme}>
            <AppNavigator />
        </PaperProvider>
    );
}
