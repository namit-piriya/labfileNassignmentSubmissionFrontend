import React, { Component } from "react";
import Wrap from "../../hoc/wrap";

class StudentSignup extends Component {
  render() {
    return (
      <Wrap>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" id="fullName" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" id="email" />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Enrollment No</label>
          <input type="text" className="form-control" id="enrollno" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
      </Wrap>
    );
  }
}

export default StudentSignup;
