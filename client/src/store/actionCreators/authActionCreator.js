import * as auth from "./actionTypes";

export const authStart = () => {
  return { type: auth.AUTH_START };
};

export const authFail = (error) => {
  return { type: auth.AUTH_FAIL, payload: error };
};

export const authError = (error) => {
  return { type: auth.AUTH_FAIL };
};

export const authSuccess = (userobj) => {
  return { type: auth.AUTH_SUCCESS, payload: userobj };
};
