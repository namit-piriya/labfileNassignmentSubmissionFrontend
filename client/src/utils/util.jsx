import React from "react";
import $ from "jquery";
import {SIGN_IN, SIGN_UP, STUDENT, TEACHER} from "../consts";
import {checkEmail, checkPass} from "./validators"


export const updateObject = (preState, updatedProps) => {
  return {
    ...preState,
    ...updatedProps,
  };
};


// different type of form extraction data
const extraction = {
  // will return an object if there is an error returns {errMsg} and if not returns {userObj}  userObj contains fields
  extractData(actor, formOf) {
    actor = actor.toUpperCase();
    let result = {};
    let obj = {};
    if (formOf === SIGN_UP) {
      if (actor === STUDENT) {
        obj.fullName = $("#fullName").val();
        obj.email = $("#email").val();
        obj.password = $("#password").val();
        obj.enrollno = $("#enrollno").val();
        obj.dept = $("#dept").val();

        if (
            !obj.fullName ||
            !obj.email ||
            !obj.password ||
            !obj.enrollno ||
            !obj.dept
        ) {
          obj.errMsg = "Fill Valid Values Cant be empty";
        } else if (!checkEmail(obj.email)) {
          result.errMsg = "fill in the right email";
        } else if (!checkPass(obj.password)) {
          result.errMsg = "password format is not right";
        }
      } else if (actor === TEACHER) {
        obj.fullName = $("#fullName").val();
        obj.email = $("#email").val();
        obj.password = $("#password").val();
        obj.dept = $("#dept").val();
        if (!obj.fullName || !obj.email || !obj.password || !obj.dept) {
          result.errMsg = "Fill Valid Values Cant be empty";
        } else if (!checkEmail(obj.email)) {
          result.errMsg = "fill in the right email";
        } else if (!checkPass(obj.password)) {
          result.errMsg = "password format is not right";
        }
      }
    } else if (formOf === SIGN_IN) {
      obj.email = $("#email").val();
      obj.password = $("#password").val();
      obj.dept = $("#dept").val();
      if (!obj.email || !obj.password || !obj.dept) {
        result.errMsg = "fill some values";
      } else if (!checkEmail(obj.email)) {
        result.errMsg = "fill in the right email";
      } else if (!checkPass(obj.password)) {
        result.errMsg = "password format is not right";
      }

    }
    if (!result.errMsg) {
      return {userObj: {...obj, userType: actor}};
    } else {
      return result;
    }
  },
};

 export default extraction;
