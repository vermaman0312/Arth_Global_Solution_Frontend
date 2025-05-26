import { ApiResponseType } from "../../../types/apis/apiResponse.type";
import {
  LOGGEDIN_VALIDATE_USER_REQUEST,
  LOGGEDIN_VALIDATE_USER_SUCCESS,
  LOGGEDIN_VALIDATE_USER_FAILURE,
} from "../../constants/authenticated_constants/login/loggedin_validate.constant";

export const loggedinValidateUserRequest = () => {
  return {
    type: LOGGEDIN_VALIDATE_USER_REQUEST,
  };
};
export const loggedinValidateUserSuccess = (data: ApiResponseType) => {
  return {
    type: LOGGEDIN_VALIDATE_USER_SUCCESS,
    payload: data,
  };
};
export const loggedinValidateUserFailure = (error: Error) => {
  return {
    type: LOGGEDIN_VALIDATE_USER_FAILURE,
    payload: error,
  };
};
