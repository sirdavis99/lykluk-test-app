import { IResponse } from "stores/interface";

export interface EResponse {
  data: IResponse;
  status: number;
}

export interface AuthPayload {
  auth: string;
}
export interface LoginPayload {
  email: string;
  password: string;
  auth?: string;
}

export interface RegisterPayload {
  fullname: string;
  email: string;
  phone?: string;
  password: string;
  confirm?: string;
  photo?: string;
  auth?: string;
}

export interface OTPVerificationPayload {
  code: number;
}

export interface Auth {
  user?: User | null;
  access_token?: string | null;
  isLoading?: boolean;
  pushId?: string | null;
}

export interface User {
  id: string;
  email: string;
  phone?: string;
  location?: string;
  fullname: string;
  username?: string;
  photo?: string;
  dob?: string;
  bio?: string;
  gender?: string;
  email_verified_at?: string;
  isVerified: boolean;
  updated_at: string;
  created_at: string;
}

export interface UserData {
  id: string;
  email: string;
  phone?: string;
  location?: string;
  fullname: string;
  username?: string;
  photo?: string;
  email_verified_at?: string;
  isVerified: boolean;
  updated_at: string;
  created_at: string;
}
export interface UserResponse extends IResponse {
  data: {
    type: string;
    expires_in: number;
    access_token: string;
    accessToken: string;
    user: UserData;
  };
}

export interface UserDataResponse extends IResponse {
  data: UserData;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface UsernamePayload extends AuthPayload {
  username: string;
}

export interface VerifyEmailPayload extends AuthPayload {
  token: string;
}

export interface ResendVerificationPayload {
  email: string;
}

export interface ForgotPasswordResponse extends IResponse {
  data: {
    auth: string;
  };
}

export interface VerifyCodePayload {
  type?: string;
  code: number;
  auth: string;
}

export interface ResendCodePayload {
  type?: string;
  auth: string;
}

export interface ChangePasswordPayload {
  token: string;
  password: string;
  confirm: string;
}
