import { IResponse } from "stores/interface";

export interface AuthPayload {
  auth: string;
}
export interface LoginPayload {
  email: string;
  password: string;
  auth?: string;
}

// export interface RegisterPayload {
//     first_name: string;
//     email: string;
//     phone?: string;
//     password: string;
//     confirm?: string;
//     photo?: string;
//     auth?: string;
// }

export interface RegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  auth: string;
}

export interface OTPVerificationPayload {
  code: number;
}

export interface Auth {
  isLoading: boolean;
  pushId: boolean;
  expires_in: number;
  email: string;
  uuid: string;
  auth: string;
  access_token: string;
  user_info: User;
}

export interface User {
  uuid: string;
  user_id: string;
  phone?: string;
  address?: string;
  first_name: string;
  last_name?: string;
  photo?: string;
  updated_at: string;
  created_at: string;
}

export interface AuthResponse extends IResponse {
  data: Auth;
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
  email: any;
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

// export interface ChangePasswordPayload {
//   code: any;
//   email: any;
//   password: any;
//   verification_id:any
// }

export interface ChangePasswordPayload {
  // code: any;
  // email: any;
  password: any;
  verification_id: any;
}
