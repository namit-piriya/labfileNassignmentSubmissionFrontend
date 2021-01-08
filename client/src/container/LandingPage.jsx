import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "../css/styles.module.css";
import { Card } from "../components/card";
import Wrap from "../hoc/wrap";
import MyModal from "../components/modal";
import Swal from "sweetalert2";
import { HOD, STUDENT, TEACHER } from "../consts";

/* 
Landing page has three cards with a button value continue
pops up a modal signup/signin

*/
class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
      showModal: null,
    };
    this.changeStateOfModal = this.changeStateOfModal.bind(this);
  }

  render() {
    return (
      <Wrap>
        <div className={Style.MyMainHeader}>
          Labfile and Assignment Submission
        </div>
        <Row>
          <div className={Style.flexContainer}>
            <Col>
              <Card
                imgSrc="hod"
                title="HOD"
                btnTitle="Continue"
                btnHandler={() => this.btnHandler(HOD)}
              />
            </Col>
            <Col>
              <Card
                imgSrc="teacher"
                title="Teacher"
                btnTitle="Continue"
                btnHandler={() => this.btnHandler(TEACHER)}
              />
            </Col>
            <Col>
              <Card
                imgSrc="student"
                title="Student"
                btnTitle="Continue"
                btnHandler={() => this.btnHandler(STUDENT)}
              />
            </Col>
          </div>
        </Row>
        <div id="modal">
          <MyModal
            invoker={this.state.showModal}
            status={this.state.status}
            closeModal={this.changeStateOfModal}
          />
        </div>
      </Wrap>
    );
  }

  checkStateAndShowDashboard() {
    if (this.state.loading === false) {
      if (this.state.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: this.state.error,
        });
      }
      if (this.state.token !== null)
        this.props.history.push(
          `/${this.state.showModal.toLowerCase()}/dashboard`
        );
    }
  }

  changeStateOfModal() {
    this.setState({ status: false });
  }

  componentDidUpdate() {
    this.checkStateAndShowDashboard();
  }

  btnHandler(invoker) {
    // console.log(this.state.status, "is the value of status in btnHandler");
    this.setState({ showModal: invoker, status: !this.state.status });
  }
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.auth.loading,
  succes: state.auth.succes,
});

export default connect(mapStateToProps)(LandingPage);
