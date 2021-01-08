import React from "react";
import Style from "../css/styles.module.css";

/**
 * @param {*} handler,name
 * @returns button element
 */
let displayButton = (props) => {
  return (
    <button className={Style.MyBtnPrimary} onClick={props.handler}>
      {props.name}
    </button>
  );
};

export { displayButton as Button };
