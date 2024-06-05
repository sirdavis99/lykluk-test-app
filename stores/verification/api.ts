import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants";
import { axiosBaseQuery } from "utils/axios_query";
import {
  AuthResponse,
  OTPVerificationPayload,
  ResendVerificationPayload,
} from "./interface";
import { IResponse } from "stores/interface";

export const verificationApi = createApi({
  reducerPath: "verificationApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/verification/` }),
  endpoints: (builder) => ({
    validateEmail: builder.mutation<AuthResponse, OTPVerificationPayload>({
      query: (credentials) => ({
        url: "email/verify",
        method: "POST",
        body: credentials,
      }),
    }),

    sendVerificationCode: builder.mutation<
      IResponse,
      ResendVerificationPayload
    >({
      query: (credentials) => ({
        url: "email/send",
        method: "POST",
        body: credentials,
      }),
    }),

    otpCodeStatusCheck: builder.query<IResponse, string>({
      query: (payload) => ({
        url: `username/check?username=${payload}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useValidateEmailMutation,
  useSendVerificationCodeMutation,
  useOtpCodeStatusCheckQuery,
} = verificationApi;
