import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSignUpScreen } from './useSignUpScreen';
import { RootStackParamList } from '../../types/navigation';

type Props = {
    navigation: StackNavigationProp<RootStackParamList>;
};

export const SignUpScreen = ({ navigation }: Props) => {
    const {
        handleEmailChange,
        handlePasswordChange,
        handlePasswordForConfirmation,
        handleCreateAccount,

        email,
        password,
        passwordForConfirmation,
    } = useSignUpScreen();

    // TODO: フォームのエラーハンドリングを実装

    return (
        <SafeAreaProvider style={styles.container}>
            <Text style={styles.header}>新規作成</Text>
            {/* TODO: 最初の文字が大文字になるを修正する */}
            <TextInput
                label="Email"
                value={email}
                onChangeText={handleEmailChange}
                style={styles.text}
            />
            <TextInput
                label="パスワード"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry
                style={styles.text}
            />
            <TextInput
                label="パスワード再入力"
                value={passwordForConfirmation}
                onChangeText={handlePasswordForConfirmation}
                secureTextEntry
                style={styles.text}
            />
            <Button
                mode="contained"
                onPress={handleCreateAccount}
                style={styles.button}
            >
                新規作成
            </Button>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate('SignIn')}
                style={styles.button2}
            >
                戻る
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
