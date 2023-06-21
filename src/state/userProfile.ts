import { atom, useRecoilState } from 'recoil';
import { User } from '../entities/User';

const userProfileAtom = atom<User | undefined | null>({
    key: 'userProfile', // unique ID (with respect to other atoms/selectors)
    default: undefined, // default value (aka initial value)
});

export const useUserProfile = () => {
    const [userProfile, setUserProfile] = useRecoilState(userProfileAtom);
    return {
        userProfile,
        setUserProfile,
    };
};
