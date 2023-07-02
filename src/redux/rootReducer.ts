import { combineReducers } from "redux";
import userReducer, { UserState } from "./user/userReducer";

export interface RootState {
  user: UserState;
}

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
