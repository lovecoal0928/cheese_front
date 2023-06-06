import { useMutation } from '@tanstack/react-query';
import { UpdateSnapRouteRequest } from '../../../repositories/snapRoute/types';
import { snapRouteRepository } from '../../../repositories/snapRoute/snapRouteRepository';

export const useUpdateSnapRoute = () => {
    return {
        ...useMutation((params: UpdateSnapRouteRequest) => {
            return snapRouteRepository.update(params);
        }),
    };
};
