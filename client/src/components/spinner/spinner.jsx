import React, { Component } from "react";
import Style from "./spinner.module.css";

export default class Spinner extends Component {
  render() {
    return (
      <div className={Style.skChase}>
        <div className={Style.skChaseDot}></div>
        <div className={Style.skChaseDot}></div>
        <div className={Style.skChaseDot}></div>
        <div className={Style.skChaseDot}></div>
        <div className={Style.skChaseDot}></div>
        <div className={Style.skChaseDot}></div>
      </div>
    );
  }
}
