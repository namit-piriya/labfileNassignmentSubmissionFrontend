import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import Wrap from "../../hoc/wrap";
import Styles from "../../css/styles.module.css";
import Button from "../Button";
import functions from "../functions/functions";

async function submitSignupForm() {
  let teacher = {};
  teacher.fullName = $("#fullName").val();
  teacher.email = $("#email").val();
  teacher.password = $("#password").val();
  teacher.dept = $("#dept").val();

  console.log(teacher);

  if (!teacher.fullName || !teacher.email || !teacher.password) {
    console.log("fill some values");
    // do some error related stuff
  } else {
    let result = await functions.submitForm("Teacher", "signup", teacher);
    console.log(result);
  }
}

export default class TeacherSignup extends Component {
  async componentDidMount() {
    let options = <Wrap>{await functions.populateDept()}</wrap>;
    ReactDOM.render(options, document.getElementById("dept"));
  }
  render() {
    return (
      <div>
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
          handler={submitSignupForm}
        ></Button>
      </div>
    );
  }
}
