import { ActionStateType } from "../../../types/redux/action.type";
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

const initialState = {
  loginFormDetails: {
    userLicenceId: null,
    isUserLicenceIdError: false,
    userEmailAddress: null,
    isUserEmailAddressError: false,
    userPassword: null,
    isUserPasswordError: false,
  },
  actionLogin: {
    loading: false,
    data: null,
    error: null,
  },
};

export const loginState = (state = initialState, action: ActionStateType) => {
  switch (action.type) {
    case USER_LICENCE_ID:
      return {
        ...state,
        loginFormDetails: {
          ...state.loginFormDetails,
          userLicenceId: action.payload,
        },
      };
    case IS_USER_LICENCE_ID_ERROR:
      return {
        ...state,
        loginFormDetails: {
          ...state.loginFormDetails,
          isUserLicenceIdError: action.payload,
        },
      };
    case USER_EMAIL_ADDRESS:
      return {
        ...state,
        loginFormDetails: {
          ...state.loginFormDetails,
          userEmailAddress: action.payload,
        },
      };
    case IS_USER_EMAIL_ADDRESS_ERROR:
      return {
        ...state,
        loginFormDetails: {
          ...state.loginFormDetails,
          isUserEmailAddressError: action.payload,
        },
      };
    case USER_PASSWORD:
      return {
        ...state,
        loginFormDetails: {
          ...state.loginFormDetails,
          userPassword: action.payload,
        },
      };
    case IS_USER_PASSWORD_ERROR:
      return {
        ...state,
        loginFormDetails: {
          ...state.loginFormDetails,
          isUserPasswordError: action.payload,
        },
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        actionLogin: {
          ...state.actionLogin,
          loading: true,
          data: null,
          error: null,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        actionLogin: {
          ...state.actionLogin,
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        actionLogin: {
          ...state.actionLogin,
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
