import * as auth from "./actionTypes";

export const authStart = () => {
  console.log("khan is here");
  return { type: auth.AUTH_START };
};

export const authError = (error) => {
  return { type: auth.AUTH_FAIL };
};

export const authSuccess = (userobj) => {
  return { type: auth.AUTH_SUCCESS, payload: userobj };
};
