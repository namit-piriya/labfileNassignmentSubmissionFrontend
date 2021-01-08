import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Wrap from "../hoc/wrap";
import ManageSem from "../components/HODDashboard/ManageSem";
import ManageTeachers from "../components/HODDashboard/ManageTeachers";
import ManageCurriculum from "../components/HODDashboard/ManageCurriculum";
import ManageVerification from "../components/HODDashboard/ManageVerification";
import Card from "react-bootstrap/Card";

export default class HODDashBoard extends Component {
  render() {
    return (
      <Wrap>
        <h1>HOD Dashboard</h1>
        <h2 >
          Department of {this.props.dept}
        </h2>
          <Card style={{ width: '18rem' }}>
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                  </Card.Text>
                  <Card.Link><Link to="/manage_sem" ></Link> </Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
          </Card>
        <div >
          <Link to="/manage_sem"></Link>
          <Link to="/manage_teachers" ></Link>
          <Link to="/manage_curriculum" ></Link>
          <Link
            to="/manage_verification"
          ></Link>
        </div>
        <div>
          <Route path="/manage_sem" component={ManageSem} />
          <Route path="/manage_teachers" component={ManageTeachers} />
          <Route path="/manage_curriculum" component={ManageCurriculum} />
          <Route path="/manage_verification" component={ManageVerification} />
        </div>
      </Wrap>
    );
  }
}
