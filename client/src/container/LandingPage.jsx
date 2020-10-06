import React from "react";
import $ from "jquery";

import Style from "../css/styles.module.css";
import { Card } from "../components/card";
import { Modal } from "../components/modal";
import Wrap from "../hoc/wrap";

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: null,
    };
  }

  render() {
    return (
      <Wrap>
        <center>
          <h1 className={Style.mainHeader}>
            Labfile and Assignment Submission
          </h1>
        </center>
        <div className={Style.flexContainer}>
          <Card
            title="HOD"
            btnTitle="Continue"
            btnHandler={() => this.btnHandler("HOD")}
          ></Card>
          <Card
            title="Teacher"
            btnTitle="Continue"
            btnHandler={() => this.btnHandler("Teacher")}
          ></Card>
          <Card
            title="Student"
            btnTitle="Continue"
            btnHandler={() => this.btnHandler("Student")}
          ></Card>
        </div>
        {this.state.showModal ? (
          <div id="modal">
            <Modal invoker={this.state.showModal}></Modal>
          </div>
        ) : (
          ""
        )}
      </Wrap>
    );
  }

  componentDidMount() {
    this.setState({
      showModal: false,
    });
  }

  btnHandler(invoker) {
    this.setState({ showModal: invoker });
  }
}

export default LandingPage;
