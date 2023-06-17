import { shuffle } from 'fast-shuffle';
import { useFetchSnapPostsByGeographyRange } from '../../hooks/domain/snapPost/useFetchSnapPost';
import { useLocationInformation } from '../../hooks/useLocationInformation';

export const useHomeScreen = () => {
    const { longitude, latitude } = useLocationInformation();
    const { data: snapPosts = [], isLoading: isSnapPostsLoading } =
        useFetchSnapPostsByGeographyRange({
            longitude,
            latitude,
        });
    const sortedSnapPosts = shuffle(snapPosts);

    return {
        snapPosts: sortedSnapPosts,
        isSnapPostsLoading,
    };
};
