import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants";
import { axiosBaseQuery } from "utils/axios_query";
import { OTPVerificationPayload, UserResponse } from "./interface";
import { IResponse } from "stores/interface";

export const validateApi = createApi({
  reducerPath: "validateApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/verification/` }),
  endpoints: (builder) => ({
    validate: builder.mutation<UserResponse, OTPVerificationPayload>({
      query: (credentials) => ({
        url: "email",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
export const { useValidateMutation } = validateApi;
