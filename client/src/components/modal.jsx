import React, { Component } from "react";
import ReactDOM from "react-dom";

import Spinner from "./spinner/spinner";
import Style from "../css/styles.module.css";
import { StudentSignup } from "./student/studentSignup";
import SignIn from "./signin";
import TeacherSignup from "./teacher/teacherSignup";

class modal extends Component {
  constructor() {
    super();
    this.state = { actor: null, formOf: null };
  }
  renderForm() {
    if (this.state.actor === "Student" && this.state.formOf === "signUp") {
      return <StudentSignup></StudentSignup>;
    } else if (
      this.state.actor === "Teacher" &&
      this.state.formOf === "signUp"
    ) {
      return <TeacherSignup></TeacherSignup>;
    } else if (this.state.formOf === "signin") {
      return <SignIn></SignIn>;
    }
  }
  switchModal(e, actor) {
    let id = e.currentTarget.id;
    if (id === "signUp") {
      this.setState({ actor, formOf: "signUp" });
    } else {
      this.setState({ actor, formOf: "signin" });
    }
  }
  render() {
    let invoker = this.props.invoker;
    let formElement;
    let loginSignupBtn = (
      <div className={Style.Modal}>
        <div style={{ display: "flex", padding: "0" }}>
          <div
            className={Style.SignupSigninBtn}
            id="signUp"
            onClick={(e) => (formElement = this.switchModal(e, invoker))}
          >
            SignUp
          </div>
          <div
            className={Style.SignupSigninBtn}
            id="signIn"
            onClick={(e) => (formElement = this.switchModal(e, invoker))}
          >
            Sign In
          </div>
        </div>
        {this.renderForm()}
      </div>
    );
    return loginSignupBtn;
  }
}

export { modal as Modal };
