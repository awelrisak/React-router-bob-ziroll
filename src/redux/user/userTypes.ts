// Define action type constants
export const USER_LOGIN = "USER_LOGIN";

// Define action type union
export type UserActionTypes = typeof USER_LOGIN;

// Define action interface
export interface UserLoginAction {
  type: typeof USER_LOGIN;
  payload: User;
}

// Define User type
export interface User {
  id: number;
  name: string;
  email: string;
}

// Now you can use UserActionTypes and UserLoginAction in your Redux actions and reducers
