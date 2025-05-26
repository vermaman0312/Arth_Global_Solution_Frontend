
import { ApiResponseType } from "../../../types/apis/apiResponse.type";
import {
  USER_LICENCE_ID,
  IS_USER_LICENCE_ID_ERROR,
  USER_EMAIL_ADDRESS,
  IS_USER_EMAIL_ADDRESS_ERROR,
  USER_PASSWORD,
  IS_USER_PASSWORD_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../constants/unauthenticated_constants/login.constant";

export const userLicenceIdAction = (userLicenceId: string) => {
  return {
    type: USER_LICENCE_ID,
    payload: userLicenceId,
  };
};
export const isUserLicenceIdErrorAction = (isUserLicenceIdError: boolean) => {
  return {
    type: IS_USER_LICENCE_ID_ERROR,
    payload: isUserLicenceIdError,
  };
};
export const userEmailAddressAction = (userEmailAddress: string | null) => {
  return {
    type: USER_EMAIL_ADDRESS,
    payload: userEmailAddress,
  };
};
export const isUserEmailAddressErrorAction = (
  isUserEmailAddressError: boolean
) => {
  return {
    type: IS_USER_EMAIL_ADDRESS_ERROR,
    payload: isUserEmailAddressError,
  };
};
export const userPasswordAction = (userPassword: string | null) => {
  return {
    type: USER_PASSWORD,
    payload: userPassword,
  };
};
export const isUserPasswordErrorAction = (isUserPasswordError: boolean) => {
  return {
    type: IS_USER_PASSWORD_ERROR,
    payload: isUserPasswordError,
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
export const loginSuccess = (data: ApiResponseType) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
export const loginFailure = (error: Error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
