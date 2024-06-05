import { number, object, string } from "yup";
import * as Yup from "yup";

export const ResetPasswordValidationScheme = object().shape({
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: string()
    .min(6, "Password must be at least 6 characters")
    .required("Confirm password field is required"),
});

export const RegisterValidationSchema = () => {
  return object().shape({
    first_name: string()
      .min(2, "First Name must but longer than 2 characters")
      .max(30, "First Name cannot be longer than 30 characters")
      .required("First Name is Required"),
    last_name: string()
      .min(2, "Last Name must but longer than 2 characters")
      .max(30, "Last Name cannot be longer than 30 characters")
      .required("Last Name is Required"),
    email: string().email().required().label("Email"),
    password: string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .min(6)
      .required()
      .label("Password"),
  });
};

export const LoginValidationSchema = object().shape({
  email: string()
    .email("Please input a valid email")
    .required("Email is Required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
});

export const EmailValidationSchema = object().shape({
  email: string()
    .email("Please input a valid email")
    .required("Email is Required"),
});

export const OtpValidationSchema = object().shape({
  code: number().label("Otp "),
});
