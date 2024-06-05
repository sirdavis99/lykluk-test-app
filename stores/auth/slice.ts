import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../main';
import { Auth, User } from './interface';
import { app_storage } from 'utils/constants';



const initialState: Auth = { isLoading: true } as Auth;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential(
      state,
      { payload: { user, access_token } }: PayloadAction<Auth>
    ) {
      AsyncStorage.setItem(app_storage, JSON.stringify({ user, access_token }))
        .catch((error) => {
          console.log('user not stored error: ', error);
        });

      state.user = user;
      state.access_token = access_token;
      state.isLoading = false;
    },
    setPushToken(state, { payload: { token } }) {
      state.pushId = token;
    }
  }
});

export const { setCredential, setPushToken } = authSlice.actions;
export default authSlice.reducer;
export const useSelectCurrentUser = (
  state: RootState
): User | null | undefined => state.auth.user;
export const useIsLoading = (state: RootState): boolean | undefined => state.auth.isLoading;
export const useSelectAuthToken = (state: RootState): string | null | undefined => state.auth.access_token;
export const useSelectAuthID = (state: RootState): string | undefined => state.auth.user?.id;
