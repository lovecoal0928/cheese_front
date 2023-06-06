import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { SnapRoute } from '../../../entities/SnapRoute';
import { snapRouteRepository } from '../../../repositories/snapRoute/snapRouteRepository';
import { SnapRouteResponse } from '../../../repositories/snapRoute/types';
import { SnapPost } from '../../../entities/SnapPost';
import { SnapPostResponse } from '../../../repositories/snapPost/types';

const QUERY_KEYS = {
    MY: () => 'mySnapRoute',
    ONE: (snaRouteId: string) => `snapRoute/${snaRouteId}`,
};

export const useFetchMySnapRoutes = (
    queryOptions?: UseQueryOptions<SnapRoute[]>
) => {
    return useQuery<SnapRoute[]>(
        [QUERY_KEYS.MY()],
        () => snapRouteRepository.fetchMy().then((res) => res.map(converter)),
        {
            ...queryOptions,
        }
    );
};

export const useFetchSnapRoute = (
    snapRouteId: string,
    queryOptions?: UseQueryOptions<SnapRoute>
) => {
    return useQuery<SnapRoute>(
        [QUERY_KEYS.ONE(snapRouteId)],
        () => snapRouteRepository.fetch({ snapRouteId }).then(converter),
        {
            ...queryOptions,
        }
    );
};

const converter = (res: SnapRouteResponse): SnapRoute => {
    return {
        ...res,
        createdAt: new Date(res.createdAt),
        updatedAt: new Date(res.updatedAt),
        snapPosts: res.snapPosts.map(convertSnapPost),
    };
};

const convertSnapPost = (res: SnapPostResponse): SnapPost => {
    return {
        ...res,
        postedAt: new Date(res.postedAt),
        updatedAt: new Date(res.updatedAt),
    };
};
