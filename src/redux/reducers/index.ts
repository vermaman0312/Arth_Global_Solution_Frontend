import { combineReducers } from "redux";
import { loginState } from "./unauthenticated_reducers/login.reducer";
import { LoggedinValidateState } from "./authenticated_reducers/loggedin_validate.reducer";

const reducerIndex = combineReducers({
  loginState,
  LoggedinValidateState,
});

export type RootReducerState = ReturnType<typeof reducerIndex>;

export default reducerIndex;
