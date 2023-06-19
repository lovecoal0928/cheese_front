import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export const SignInScreen = () => {
    return (
        <SafeAreaProvider style={styles.container}>
            <TextInput label="Email" value="" />
            <TextInput label="Password" value="" />
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
