import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Wrap from "../../hoc/wrap";

import Semester from "../Semester/Semester";

function getSemesterList(semesters) {
  let div = "";
  for (let i = 0; i < semesters; ++i) {
    let s = `
    <div className="semCard" onClick= goToTheSem  id = "${i}"> Semester <b>${i}</b> </div>
  `;
    div += s;
  }
  return div;
}

export default class ManageSem extends Component {
  render() {
    // let sem = this.props.match.path.split()[1];
    return (
      <Wrap>
        <div className="ManageSem">{getSemesterList()};</div>
      </Wrap>
    );
  }
}
