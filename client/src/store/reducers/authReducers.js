import * as actionTypes from "../actionCreators/actionTypes";
import { updateObject } from "../../utils/util";

const initialState = {
  token: null,
  email: null,
  dept: null,
  error: null,
  loading: false,
};

const authStart = (state, action) => {
  // console.log("khan in the auth reducer");
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.userObj.token,
    email: action.userObj.email,
    error: null,
    loading: false,
    dept: action.userObj.dept,
    role: action.userObj.role,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.errMsg,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
