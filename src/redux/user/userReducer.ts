import { User, USER_LOGIN } from "./userTypes";
import { UserLoginAction } from "./userActions"; // Import the correct UserLoginAction type

export type UserState = User | null | undefined;

export const initialUserState: UserState = null;

const userReducer = (state: UserState = initialUserState, action: UserLoginAction): UserState => {
  switch (action.type) {
    case USER_LOGIN:
      return action?.payload;
    default:
      return state;
  }
};

export default userReducer;
