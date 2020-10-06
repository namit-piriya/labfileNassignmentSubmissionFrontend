import React from "react";

let exportObj = {};
let host = "http://localhost";
let port = 8000;
exportObj.submitForm = async (actor, action, obj) => {
  let baseUrl = `${host}:${port}`;
  if (actor === "Student") {
    if (action === "signup") {
      let reqUrl = baseUrl + "/student/register_student";
      let result = await fetch(reqUrl, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(obj),
      }).then((response) => response.json());
      return result;
    } else if (action === "signin") {
      let reqUrl = baseUrl + "/auth/login_user";
      let result = await fetch(reqUrl, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(obj),
      }).then((response) => response.json());

      return result;
    }
  } else if (actor === "Teacher") {
  } else if (actor === "HOD") {
  }
};
/**
 *
 * @returns array of dept
 */
exportObj.populateDept = async () => {
  // console.log("in populate dept " + mythis);
  let host = "localhost";
  let port = "8000";
  try {
    let result = await (
      await fetch(`http://${host}:${port}/app/get_dept`)
    ).json();
    return result.data.map((ele) => (
      <option value={ele} key={ele}>
        {ele}
      </option>
    ));
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default exportObj;
