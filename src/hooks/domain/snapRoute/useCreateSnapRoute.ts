import { useMutation } from '@tanstack/react-query';
import { CreateSnapRouteRequest } from '../../../repositories/snapRoute/types';
import { snapRouteRepository } from '../../../repositories/snapRoute/snapRouteRepository';

export const useCreateSnapRoute = () => {
    return {
        ...useMutation((params: CreateSnapRouteRequest) => {
            return snapRouteRepository.create(params);
        }),
    };
};
