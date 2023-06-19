import { shuffle } from 'fast-shuffle';
import { useLocationInformation } from '../../hooks/useLocationInformation';
import { useMemo } from 'react';
import { useFetchSnapPostsByGeographyRange } from '../../hooks/domain/snapPost/useFetchSnapPost';

export const useHomeScreen = () => {
    const { location } = useLocationInformation();

    const { data: snapPosts = [], isLoading: isSnapPostsLoading } =
        useFetchSnapPostsByGeographyRange(location);
    const sortedSnapPosts = useMemo(() => shuffle(snapPosts), [snapPosts]);

    return {
        snapPosts: sortedSnapPosts,
        isSnapPostsLoading,
    };
};
