import { USER_LOGIN, User } from "./userTypes";

export interface UserLoginAction {
  type: typeof USER_LOGIN;
  payload?: User | null; 
}

export const loginUser = (user: User = null): UserLoginAction => {
  return {
    type: USER_LOGIN,
    payload: user,
  };
};
