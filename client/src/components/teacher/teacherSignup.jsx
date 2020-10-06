import React, { Component } from "react";
import ReactDOM from "react-dom";
import Styles from "../../css/styles.module.css";
import { Button } from "../button";
import functions from "../functions/functions";
// import Wrap from "../../hoc/wrap";
// import ReactDOM from "react-dom";
// import validator from "validator";
import $ from "jquery";
import { authStart } from "../../store/actionCreators/authActionCreator";
import { connect } from "react-redux";
import Spinner from "../spinner/spinner";

const TeacherSignup = class extends Component {
  constructor(props) {
    super(props);
    this.submitSignupForm = this.submitSignupForm.bind(this);
  }
  componentDidUpdate() {
    if (this.props.loading === true) {
      ReactDOM.render(<Spinner />, document.getElementById("spinner"));
    } else {
      ReactDOM.render("", document.getElementById("spinner"));
    }
  }
  async submitSignupForm() {
    let teacher = {};
    teacher.fullName = $("#fullName").val();
    teacher.email = $("#email").val();
    teacher.password = $("#password").val();
    teacher.dept = $("#dept").val();

    console.log(teacher);

    if (
      !teacher.fullName ||
      !teacher.email ||
      !teacher.password
      // !teacher.dept
    ) {
      console.log("fill some values");
      // do some error related stuff
    } else {
      // console.log("this is ", this);
      this.props.authStart();
      console.log(this.props);

      // console.log(this.props.authStart);
      let result = await functions.submitForm("teacher", "signup", teacher);
      console.log(result);
    }
  }

  render() {
    return (
      <div>
        <div id="spinner"></div>
        <input
          placeholder="Your Full Name"
          className={Styles.ModalInput}
          type="text"
          id="fullName"
        />
        <input
          placeholder=" Your email"
          className={Styles.ModalInput}
          type="email"
          id="email"
        />
        <input
          placeholder=" Your password"
          className={Styles.ModalInput}
          type="password"
          id="password"
        />
        <select id="dept"></select>
        <Button
          name="Sign up"
          className={Styles.BtnPrimary}
          handler={this.submitSignupForm}
        ></Button>
        {console.log(this.props.loading, this.props.error)}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    authStart: () => dispatch(authStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherSignup);
