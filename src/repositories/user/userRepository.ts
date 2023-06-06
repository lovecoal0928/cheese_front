import { httpsCallable } from 'firebase/functions';
import {
    CreateUserRequest,
    FetchUserRequest,
    UserResponse,
    UserResponseScheme,
} from './types';
import { functions } from '../../plugins/firebase';

export const userRepository = {
    create: async (params: CreateUserRequest): Promise<void> => {
        await httpsCallable(functions, 'createUser')(params);
    },

    fetch: async (params: FetchUserRequest): Promise<UserResponse> => {
        const res = await httpsCallable(functions, 'fetchUser')(params);
        return UserResponseScheme.parse(res.data);
    },

    fetchMy: async (): Promise<UserResponse> => {
        const res = await httpsCallable(functions, 'fetchMyUser')();
        return UserResponseScheme.parse(res.data);
    },
};
