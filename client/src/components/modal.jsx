import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Spinner from "react-bootstrap/Spinner/";
import {connect} from "react-redux";
import Wrap from "../hoc/wrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import {authFail, authStart, authSuccess,} from "../store/actionCreators/authActionCreator";
import {signupFail, signupStart, signupSuccess,} from "../store/actionCreators/signupActionCreators";
import {getDept, homePageForms} from "../utils/axiosReq";
import StudentSignup from "./student/studentSignup";
import SignIn from "./signin";
import TeacherSignup from "./teacher/teacherSignup";
import {SIGN_IN, SIGN_UP, STUDENT, TEACHER} from "../consts";
import $ from "jquery";

function renderDept(depts) {
  let optionDept = depts.map((dept) => {
    return <option key={dept}>{dept}</option>;
  })

  return <select id="dept">{optionDept}</select>;
}

class MyModal extends Component {
  constructor() {
    super();
    this.submittingForm = this.submittingForm.bind(this);
    this.state = {actor: null, formOf: SIGN_IN, dept: []};
  }

  handleClose = () => {
    this.props.closeModal();
    this.setState({
      actor: null,
    });
  };

  async submittingForm() {
    let result = null;
    if (this.state.formOf === SIGN_IN) {
      result = await homePageForms(this.state.actor, this.state.formOf);
      if (result.errMsg) {
        this.props.authFail(result.errMsg);
        Swal.fire({
          title: "oops....!!!!",
          icon: "error",
          footer: result.errMsg || "Something wrong Happened!!",
        });
      } else {
        this.props.authSuccess(result);
        Swal.fire({
          title: `Welcome ${result.email} Login Completed`,
          footer: "redirecting to the dashboard",
          icon: "success",
          timer: 2000,
        });
        setTimeout(() => {
          this.props.history.push(
              `/${this.state.actor.toLowerCase()}/dashboard`
          );
        }, 2000);
      }
    } else if (this.state.formOf === SIGN_UP) {
      this.props.signupStart();
      result = await homePageForms(this.state.actor, this.state.formOf);
      console.log(result);
      if (result.errMsg) {
        this.props.signupFail(result.errMsg);
        Swal.fire({
          title: "oops....!!!!",
          icon: "error",
          footer: result.errMsg || "Something wrong Happened!!",
        });
      } else {
        this.props.signupSuccess(result);
        Swal.fire({
          title: `Sign Up Completed`,
          footer: "please login to continue",
          icon: "success",
          timer: 2000,
        });
      }
    }
  }

  async componentDidMount() {
    this.setState({actor: this.props.invoker});
    if (this.state.dept.length === 0) {
      // console.log("cdm")
      let dept = await getDept();
      this.setState({dept: dept})
    }
  }

  renderForm() {
    if (this.state.actor === STUDENT && this.state.formOf === SIGN_UP) {
      return <StudentSignup/>;
    } else if (
        this.state.actor === TEACHER &&
        this.state.formOf === SIGN_UP
    ) {
      return <TeacherSignup/>;
    } else if (this.state.formOf === SIGN_IN) {
      return <SignIn actor={this.state.actor}/>;
    }
  }

  switchModal(e, actor) {
    let id = e.currentTarget.id;
    if (id === SIGN_UP) {
      $(`#${id}`).css("background-color", " #f2ccff");
      $(`#${SIGN_IN}`).css("background-color", "white");
    }
    if (id === SIGN_IN) {
      $(`#${id}`).css("background-color", " #f2ccff");
      $(`#${SIGN_UP}`).css("background-color", "white");
    }


    this.setState({actor, formOf: id});
    // console.log(this.state);
  }

  render() {
    let invoker = this.props.invoker;
    let header = (
        <Wrap>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link
                  id={SIGN_UP}
                  onClick={(e) => this.switchModal(e, invoker)}
              >
                Sign Up
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                  id={SIGN_IN}
                  onClick={(e) => this.switchModal(e, invoker)}
              >
                Sign In
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Wrap>
    );
    return (
        <React.Fragment>
          <Modal
              show={this.props.status}
              onHide={this.handleClose}
              centered={true}
          >
            <Modal.Header closeButton>Welcome</Modal.Header>
            <Modal.Body>
              <Modal.Title>
                <div className="d-flex justify-content-center">{header}</div>
              </Modal.Title>
              {this.renderForm()}
              {/*{console.log("is state " + JSON.stringify(this.state))}*/}
              {this.state.dept.length === 0
                  ? "Dept are loading"
                  : renderDept(this.state.dept)}
            </Modal.Body>
            <Modal.Footer>
              <Button
                  variant="primary"
                  onClick={this.submittingForm}
                  disabled={this.props.loading}
              >
                {this.props.loading ? (
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                ) : (
                    "Submit"
                )}
              </Button>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("state in redux", state);
  return {
    loading: state.auth.loading || state.signup.loading,
    error: state.auth.error || state.signup.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    authSuccess: (userObj) => dispatch(authSuccess(userObj)),
    authStart: () => dispatch(authStart()),
    authFail: (error) => dispatch(authFail(error)),
    signupSuccess: () => dispatch(signupSuccess()),
    signupStart: () => dispatch(signupStart()),
    signupFail: () => dispatch(signupFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyModal);
