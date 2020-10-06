import React, { Component } from "react";
import $ from "jquery";
import ReactDOM from "react-dom";
// import { connect } from "react-redux";

// import { actionCreator } from "../actionPath";
import Wrap from "../hoc/wrap";
import Style from "../css/styles.module.css";
import functions from "./functions/functions";
import { Button } from "./button";
// import { Redirect } from "react-router";

// submits signin form and gives result

const SignIn = class extends Component {
  async submitSigninForm(actor) {
    let obj = {};
    obj.email = $("#email").val();
    obj.password = $("#password").val();
    obj.dept = $("#dept").val();

    console.log(obj);

    if (!obj.email || !obj.password) {
      console.log("fill some values");
      // do some error related stuff
    } else {
      let result = await functions.submitForm(actor, "signin", obj);
    }
  }

  // async componentDidMount() {
  //   let options = <Wrap>{await functions.populateDept()}</wrap>;
  //   ReactDOM.render(options, document.getElementById("dept"));
  // }

  render() {
    return (
      <div>
        <input
          placeholder=" Your email"
          type="email"
          id="email"
          className={Style.ModalInput}
        />
        <input
          placeholder=" Your password"
          type="password"
          id="password"
          className={Style.ModalInput}
        />
        <input type="checkbox" name="" id="rememberMe" />
        <select id="dept"></select>
        <Button
          name="Sign In"
          handler={() => this.submitSigninForm(this.props.actor)}
        ></Button>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitSigninForm: (actor, "signin", obj) =>
//       dispatch(functions.submitForm(actor, "signin", obj)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignIn;
