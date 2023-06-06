import { useMutation } from '@tanstack/react-query';
import { snapRouteRepository } from '../../../repositories/snapRoute/snapRouteRepository';

export const useDeleteSnapRoute = () => {
    return {
        ...useMutation((snapRouteId: string) => {
            return snapRouteRepository.delete({ snapRouteId });
        }),
    };
};
