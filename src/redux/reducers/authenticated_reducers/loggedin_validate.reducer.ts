import {
  LOGGEDIN_VALIDATE_USER_REQUEST,
  LOGGEDIN_VALIDATE_USER_SUCCESS,
  LOGGEDIN_VALIDATE_USER_FAILURE,
} from "../../constants/authenticated_constants/login/loggedin_validate.constant";
import { ActionStateType } from "../../../types/redux/action.type";

const initialState = {
  actionLoggedinValidateUser: {
    loading: false,
    data: null,
    error: null,
  },
};

export const LoggedinValidateState = (
  state = initialState,
  action: ActionStateType
) => {
  switch (action.type) {
    case LOGGEDIN_VALIDATE_USER_REQUEST:
      return {
        ...state,
        actionLoggedinValidateUser: {
          ...state.actionLoggedinValidateUser,
          loading: true,
          data: null,
          error: null,
        },
      };
    case LOGGEDIN_VALIDATE_USER_SUCCESS:
      return {
        ...state,
        actionLoggedinValidateUser: {
          ...state.actionLoggedinValidateUser,
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case LOGGEDIN_VALIDATE_USER_FAILURE:
      return {
        ...state,
        actionLoggedinValidateUser: {
          ...state.actionLoggedinValidateUser,
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
