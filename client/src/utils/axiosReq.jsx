import {BASE_URL, SIGN_IN, SIGN_UP, STUDENT, TEACHER} from "../consts";
import axios from "axios";
import extraction from "./util";

const axiosRequest = async (url, method, object) => {
  url = BASE_URL + url;
  if (method === "post") {
    return axios.post(url, object);
  }
  return axios.get(url);
}


// this function submits authentication and registration forms
const homePageForms = async (actor, formOf) => {
  let reqUrl;
  if (formOf === SIGN_UP) {
    let {errMsg, userObj} = extraction.extractData(actor, formOf);
    if (errMsg) {
      return {errMsg};
    }
    if (actor === STUDENT) {
      reqUrl = "/student/register_student";
    }
    if (actor === TEACHER) {
      reqUrl = "/teacher/register_teacher";
    }
    try {
      let {data} = await axiosRequest(reqUrl, "post", userObj);
      return data;
    } catch (error) {
      if (!error.response) {
        return {errMsg: "Something wrong happened!!!"}
      }
      const {
        msg
      } = error.response.data;
      return {errMsg: msg};
    }
  } else if (formOf === SIGN_IN) {
    let {errMsg, userObj} = extraction.extractData(actor, formOf);
    if (errMsg) {
      return errMsg;
    }
    reqUrl = "/auth/login_user";
    try {
      let result = await axiosRequest(reqUrl, "post", (userObj));
      return result;
    } catch (error) {
      return sendError(error);
    }
  }
};
// extracts message and return error message
var sendError = (error) => {
  const {msg} = error.response.data;
  console.error(msg);
  let errMsg = msg || "Something Wrong Happened!!!";
  return {errMsg};
};

// will return a list of dept
const getDept = async () => {
  try {
    let {data} = await axiosRequest("/app/get_dept");
//     console.log("data is ", data)
    const {
      dept
    } = data.result;
    console.log(data);
    return dept;
  } catch (error) {
    if (error.message.includes("Network")) {
      // console.log("returning network error");
      return ["Network Error"];
    }
    console.log(error);
  }
};

export {getDept, homePageForms};