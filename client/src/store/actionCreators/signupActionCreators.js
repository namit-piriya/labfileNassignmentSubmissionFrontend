import * as actions from "./actionTypes";

export const signupStart = () => {
  return { type: actions.SIGNUP_START };
};

export const signupFail = () => {
  return { type: actions.SIGNUP_FAIL };
};
export const signupSuccess = () => {
  return { type: actions.SIGNUP_SUCCESS };
};
