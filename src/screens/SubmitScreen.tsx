import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useCreateSnapPost } from '../hooks/domain/snapPost/useCreateSnapPost';
import { CreateSnapPostRequest } from '../repositories/snapPost/types';
import { useDeleteSnapPost } from '../hooks/domain/snapPost/useDeleteSnapPost';
import { useUpdateSnapPost } from '../hooks/domain/snapPost/useUpdateSnapPost';
import {
    useFetchLikedSnapPosts,
    useFetchMySnapPosts,
    useFetchSnapPost,
} from '../hooks/domain/snapPost/useFetchSnapPost';
import { useLikeSnapPost } from '../hooks/domain/snapPost/useLikeSnapPost';
import * as ImagePicker from 'expo-image-picker';
import { useUploadFile } from '../hooks/useUploadFile';

const dummyData: CreateSnapPostRequest = {
    title: '京都御所',
    comment: '京都の旧皇居です。',
    longitude: 139.691711,
    latitude: 35.689487,
    postImages: [
        {
            imagePath:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kyoto_Imperial_Palace_%28East_Garden%29.jpg/1200px-Kyoto_Imperial_Palace_%28East_Garden%29.jpg',
            tags: ['京都', '御所', '皇居'],
        },
    ],
};
const dummyId = 'f1060cf7-5673-4376-ba0d-6faac48de8fa';
export const SubmitScreen = () => {
    // const { mutate: createSnapPost } = useCreateSnapPost();
    // const { mutate: deleteSnapPost } = useDeleteSnapPost();
    // const { mutate: updateSnapPost } = useUpdateSnapPost();
    // const { mutate: likeSnapPost } = useLikeSnapPost();
    // const { data: snapPost } = useFetchSnapPost(dummyId);
    // const { data: snapPosts } = useFetchMySnapPosts();
    // const { data: snapPosts } = useFetchLikedSnapPosts();

    const { mutate } = useUploadFile();

    // useState
    const [image, setImage] = useState<string | null>(null);

    // 写真加工ボタン
    const handlePhotoEditBtn = async () => {
        const response =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!response.granted) return;

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            base64: true,
        });

        if (pickerResult.canceled) return;

        const { uri, base64 } = pickerResult.assets[0];
        console.log(base64);
        // // mutate(
        // //     { base64Url: base64, folderName: 'snapPosts' },
        // //     {
        // //         onSuccess: (data) => console.log(data),
        // //         onError: (error) => console.log(error),
        // //     }
        // // );
        // setImage(pickerResult.assets[0].uri);
    };
    return (
        <View>
            <TextInput label={'タイトル'} />
            <TextInput
                label={'場所'}
                right={
                    <TextInput.Icon
                        icon="map-marker"
                        onPress={() => console.log('aa')}
                    />
                }
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
                onPress={handlePhotoEditBtn}
            >
                写真を追加
            </Button>
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
    },
});
