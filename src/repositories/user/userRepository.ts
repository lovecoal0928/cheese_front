import { httpsCallable } from 'firebase/functions';
import { UserRequest } from './types';
import { functions } from '../../plugins/firebase';

export const userRepository = {
    create: async (params: UserRequest): Promise<void> => {
        await httpsCallable(functions, 'createUser')(params);
    },
};
