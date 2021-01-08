import * as actionTypes from "../actionCreators/actionTypes";
import { updateObject } from "../../utils/util";

const initialState = {
  loading: false,
};

const signupStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const signupSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

const signupFail = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_START:
      return signupStart(state, action);
    case actionTypes.SIGNUP_SUCCESS:
      return signupSuccess(state, action);
    case actionTypes.SIGNUP_FAIL:
      return signupFail(state, action);
    default:
      return state;
  }
};

export default reducer;
