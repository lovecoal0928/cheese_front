import { httpsCallable } from 'firebase/functions';
import { functions } from '../../plugins/firebase';
import {
    CreateSnapRouteRequest,
    DeleteSnapRouteRequest,
    FetchSnapRouteRequest,
    SnapRouteResponse,
    SnapRouteResponseListScheme,
    SnapRouteResponseScheme,
    UpdateSnapRouteRequest,
} from './types';

export const snapRouteRepository = {
    create: async (params: CreateSnapRouteRequest): Promise<void> => {
        await httpsCallable(functions, 'createSnapRoute')(params);
    },

    update: async (params: UpdateSnapRouteRequest): Promise<void> => {
        await httpsCallable(functions, 'updateSnapRoute')(params);
    },

    delete: async (params: DeleteSnapRouteRequest): Promise<void> => {
        await httpsCallable(functions, 'deleteSnapRoute')(params);
    },

    fetch: async (
        params: FetchSnapRouteRequest
    ): Promise<SnapRouteResponse> => {
        const res = await httpsCallable(functions, 'fetchSnapRoute')(params);
        return SnapRouteResponseScheme.parse(res.data);
    },

    fetchMy: async (): Promise<SnapRouteResponse[]> => {
        const res = await httpsCallable(functions, 'fetchMySnapRoutes')();
        return SnapRouteResponseListScheme.parse(res.data);
    },
};
