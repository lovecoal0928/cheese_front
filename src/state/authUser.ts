import { User } from 'firebase/auth';
import { atom, useRecoilState } from 'recoil';

const authUserAtom = atom<User | undefined | null>({
    key: 'authUser', // unique ID (with respect to other atoms/selectors)
    default: undefined, // default value (aka initial value)
});

export const useAuthUser = () => {
    const [authUser, setAuthUser] = useRecoilState(authUserAtom);
    return {
        authUser,
        setAuthUser,
    };
};
