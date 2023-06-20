import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export const AuthScreen = () => {
    return (
        <SafeAreaProvider style={styles.container}>
            <ActivityIndicator size={'large'} />
            <Text style={styles.text}>ログイン中...</Text>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 16,
        fontSize: 12,
        color: '#888',
    },
});
