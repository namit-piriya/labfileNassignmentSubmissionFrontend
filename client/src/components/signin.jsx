import React, { Component } from "react";
import { connect } from "react-redux";
import Wrap from "../hoc/wrap";
import {
  authSuccess,
  authStart,
  authFail,
} from "../store/actionCreators/authActionCreator";
// import { Redirect } from "react-router";

// submits signin form and gives result

const SignIn = class extends Component {
  render() {
    let form = (
      <Wrap>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" id="email" />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label">Remember Me</label>
        </div>
      </Wrap>
    );
    return form;
  }
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authSuccess: (userObj) => dispatch(authSuccess(userObj)),
    authStart: () => dispatch(authStart()),
    authFail: (error) => dispatch(authFail(error)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
