import { httpsCallable } from 'firebase/functions';
import {
    CreateSnapPostRequest,
    DeleteSnapPostRequest,
    FetchSnapPostRequest,
    LikeSnapPostRequest,
    SnapPostResponse,
    SnapPostResponseListScheme,
    SnapPostResponseScheme,
    UpdateSnapPostRequest,
} from './types';
import { functions } from '../../plugins/firebase';

export const snapPostRepository = {
    create: async (params: CreateSnapPostRequest) => {
        await httpsCallable(functions, 'createSnapPost')(params);
    },

    update: async (params: UpdateSnapPostRequest) => {
        await httpsCallable(functions, 'updateSnapPost')(params);
    },

    delete: async (params: DeleteSnapPostRequest) => {
        await httpsCallable(functions, 'deleteSnapPost')(params);
    },

    like: async (params: LikeSnapPostRequest) => {
        await httpsCallable(functions, 'likeSnapPost')(params);
    },

    fetch: async (params: FetchSnapPostRequest): Promise<SnapPostResponse> => {
        const res = await httpsCallable(functions, 'fetchSnapPost')(params);
        return SnapPostResponseScheme.parse(res.data);
    },

    fetchMy: async (): Promise<SnapPostResponse[]> => {
        const res = await httpsCallable(functions, 'fetchMySnapPosts')();
        return SnapPostResponseListScheme.parse(res.data);
    },

    fetchLiked: async (): Promise<SnapPostResponse[]> => {
        const res = await httpsCallable(functions, 'fetchLikedSnapPosts')();
        return SnapPostResponseListScheme.parse(res.data);
    },
};
