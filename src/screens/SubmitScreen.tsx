import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export const SubmitScreen = () => {
    return (
        <View>
            <TextInput
                label={'タイトル'}
            />
            <TextInput
                label={'場所'}
                right={<TextInput.Icon icon="map-marker" onPress={() => console.log('aa')
                } />}
            />
            <TextInput
                label={'コメント'}
                multiline={true}
                numberOfLines={10}
                style={styles.textarea}
            />
            <Button
                mode="contained"
                icon={'camera'}
                style={styles.submitBtn}
                onPress={() => console.log('Pressed')}
            >
                写真を追加</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    textarea: {
        height: 200,
    },
    submitBtn: {
        marginTop: 64,
        width: 200,
        borderRadius: 500,
        alignSelf: 'center',
    }
});