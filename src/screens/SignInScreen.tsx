import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export const SignInScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleEmailChange = (email: string) => setEmail(email);
    const handlePasswordChange = (password: string) => setPassword(password);

    return (
        <SafeAreaProvider style={styles.container}>
            <TextInput
                label="Email"
                mode="flat"
                value={email}
                onChangeText={handleEmailChange}
                style={styles.text}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry
                style={styles.text}
            />
            <Button
                mode="contained"
                onPress={() => console.log('Pressed')}
                style={styles.button}
            >
                ログイン
            </Button>
            <Button
                mode="outlined"
                onPress={() => console.log('Pressed')}
                style={styles.button2}
            >
                新規登録
            </Button>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,

        justifyContent: 'center',
    },
    text: {
        marginTop: 20,
    },
    button: {
        marginTop: 120,
    },
    button2: {
        marginTop: 20,
    },
});