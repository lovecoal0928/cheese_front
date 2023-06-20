import React from 'react';
import { Button, Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    goBack: () => void;
    submit: () => void;
}

export const Header = ({ goBack, submit }: Props) => {
    return (
        <View style={styles.header}>
            <View style={styles.actionWrapper}>
                <Appbar.Action
                    icon={({ color, size }) => (
                        <Ionicons name="close" size={size} color={color} />
                    )}
                    onPress={goBack}
                />
            </View>
            <View style={styles.contentWrapper}>
                <Text style={styles.contentText}>新規作成</Text>
            </View>
            <View style={styles.submitWrapper}>
                <Button mode="text" onPress={submit}>
                    <Text style={styles.submitText}>保存</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    submitText: {
        fontSize: 16,
        color: '#147EFB',
        fontWeight: 'bold',
        margin: 0,
    },

    actionWrapper: {
        width: '33%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    submitWrapper: {
        width: '33%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    contentWrapper: {
        width: '33%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
