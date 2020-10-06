import React, { Component } from "react";
import Styles from "../../css/styles.module.css";
import { Button } from "../button";
import functions from "../functions/functions";
import Wrap from "../../hoc/wrap";
import ReactDOM from "react-dom";
import validator from "validator";
import $ from "jquery";

async function submitSignupForm() {
  let student = {};
  student.fullName = $("#fullName").val();
  student.email = $("#email").val();
  student.password = $("#password").val();
  student.enrollno = $("#enrollno").val();
  student.dept = $("#dept").val();

  console.log(student);

  if (
    !student.fullName ||
    !student.email ||
    !student.password ||
    !student.enrollno
  ) {
    console.log("fill some values");
    // do some error related stuff
  } else {
    let result = await functions.submitForm("Student", "signup", student);
    console.log(result);
  }
}

class studentSignup extends Component {
  constructor() {
    super();
    this.state = {
      dept: null,
    };
  }

  // async componentDidMount() {
  //   let options = <Wrap>{await functions.populateDept()}</wrap>;
  //   ReactDOM.render(options, document.getElementById("dept"));
  // }

  render() {
    let styleobj = { color: "red" };
    return (
      <div style={styleobj}>
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
          placeholder=" Your enrollment no"
          className={Styles.ModalInput}
          type="text"
          id="enrollno"
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
          handler={submitSignupForm}
        ></Button>
      </div>
    );
  }
}

export { studentSignup as StudentSignup };
