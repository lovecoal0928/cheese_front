import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useSignInScreen } from './useSignInScreen';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
    navigation: StackNavigationProp<any>;
};

export const SignInScreen = ({ navigation }: Props) => {
    const {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
    } = useSignInScreen();

    return (
        <SafeAreaProvider style={styles.container}>
            <Text style={styles.header}>ログイン</Text>
            {/* TODO: 最初の文字が大文字になるを修正する */}
            <TextInput
                label="Email"
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
                onPress={handleLogin}
                style={styles.button}
            >
                ログイン
            </Button>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate('アカウント作成')}
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
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
