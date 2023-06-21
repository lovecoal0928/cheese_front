import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import { useNewProfileScreen } from './useNewProfileScreen';

type Props = {
    navigation: StackNavigationProp<RootStackParamList>;
};

export const NewProfileScreen = () => {
    const { name, handleChangeName, handleSubmit } = useNewProfileScreen();

    // TODO: フォームのエラーハンドリングを実装
    return (
        <SafeAreaProvider style={styles.container}>
            <Text style={styles.header}>プロフィール作成</Text>

            <TextInput
                label="名前"
                value={name}
                onChangeText={handleChangeName}
                style={styles.text}
                autoCapitalize="none"
            />
            <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.button}
            >
                新規作成
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
