import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants";
import { axiosBaseQuery } from "utils/axios_query";
import {
  ChangePasswordPayload,
  ForgotPasswordPayload,
  ForgotPasswordResponse,
  LoginPayload,
  RegisterPayload,
  ResendVerificationPayload,
  UsernamePayload,
  AuthResponse,
  VerifyEmailPayload,
} from "./interface";
import { IResponse } from "stores/interface";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/auth/` }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginPayload>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, RegisterPayload>({
      query: (credentials) => ({
        url: "register",
        method: "POST",
        body: credentials,
      }),
    }),
    forgot: builder.mutation<ForgotPasswordResponse, ForgotPasswordPayload>({
      query: (credentials) => ({
        url: "forgot_password",
        method: "POST",
        body: credentials,
      }),
    }),
    username: builder.mutation<IResponse, UsernamePayload>({
      query: (payload) => ({
        url: `username/${payload.auth}/create`,
        method: "PUT",
        body: { username: payload.username },
      }),
    }),
    usernameCheck: builder.query<IResponse, string>({
      query: (payload) => ({
        url: `username/check?username=${payload}`,
        method: "GET",
      }),
    }),
    verifyCode: builder.mutation<IResponse, VerifyEmailPayload>({
      query: (payload) => ({
        url: `verify/${payload.auth}/email`,
        method: "PUT",
        body: { token: payload.token },
      }),
    }),
    resendCode: builder.mutation<IResponse, ResendVerificationPayload>({
      query: (credentials) => ({
        url: "send_email_code",
        method: "POST",
        body: credentials,
      }),
    }),
    recoverPassword: builder.mutation<IResponse, ResendVerificationPayload>({
      query: (credentials) => ({
        url: "password/recover",
        method: "POST",
        body: credentials,
      }),
    }),
    resetPassword: builder.mutation<IResponse, ChangePasswordPayload>({
      query: (credentials) => ({
        url: "reset_password",
        method: "POST",
        body: credentials,
      }),
    }),
  }),

});
export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotMutation,
  useUsernameMutation,
  useUsernameCheckQuery,
  useVerifyCodeMutation,
  useResendCodeMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
} = authApi;
