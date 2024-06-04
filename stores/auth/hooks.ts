import { useMemo } from "react";
import { setCredential, useIsLoading, useSelectAuthToken, useSelectCurrentUser } from "./slice";
import { useAppDispatch, useAppSelector } from "../hooks";

export const useAuth = () => {
    const photo = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
    const user = useAppSelector(useSelectCurrentUser);
    const isLoading = useAppSelector(useIsLoading);

    return useMemo(
        () => ({
            user: user ? { ...user,
                // photo: (user.photo ?? photo)
            } : null,
            isLoading
        }),
        [user, isLoading]
    );
};

export const useAuthToken = () => {
    const token = useAppSelector(useSelectAuthToken);
    return useMemo(() => ({ access_token: token }), [token]);
}

export const usePushToken = () => {
    const { pushId } = useAppSelector((state) => state.auth);
    return useMemo(() => pushId, [pushId]);
};

export const useLogout = () => {
    const dispatch = useAppDispatch();
    return () => dispatch(setCredential({}));
};