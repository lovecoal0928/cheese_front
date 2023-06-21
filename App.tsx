import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { AppNavigator } from './src/navigations/AppNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { AuthProvider } from './src/contexts/AuthProvider';
const queryClient = new QueryClient();

export default function App() {
    const theme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
            ...DefaultTheme.colors,
            primary: '#333',
            onPrimary: '#fff',
            primaryContainer: '#000',
            onPrimaryContainer: '#fff',
            secondary: '#FFEDAF',
            secondaryContainer: '#333',
            onSecondaryContainer: '#fff',
            background: '#f4f4f4',
            surfaceVariant: '#fff',
        },
    };

    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <AuthProvider>
                    <PaperProvider theme={theme}>
                        <AppNavigator />
                    </PaperProvider>
                </AuthProvider>
            </RecoilRoot>
        </QueryClientProvider>
    );
}
