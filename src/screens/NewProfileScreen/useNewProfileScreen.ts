import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import { useCreateUser } from '../../hooks/domain/user/useCreateUser';

export const useNewProfileScreen = () => {
    const [name, setName] = useState('');
    // TODO: アイコンを設定できるようにする
    const defaultIconPath = 'https://bit.ly/broken-link';

    const { mutate: createUser } = useCreateUser();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const handleChangeName = (name: string) => setName(name);

    // TODO: フォームのエラーハンドリングを実装
    const handleSubmit = () => {
        createUser(
            { name, iconPath: defaultIconPath },
            {
                onSuccess: () => navigation.navigate('Main'),
                onError: (error) => console.log(error),
            }
        );
    };
    return {
        name,
        handleChangeName,
        handleSubmit,
    };
};
