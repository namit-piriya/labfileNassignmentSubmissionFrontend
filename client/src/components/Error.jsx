import React from "react";
import Style from "../css/styles.module.css";
import Wrap from "../hoc/wrap";

export default (props) => {
  return (
    <Wrap>
      <div className={Style.Error}>
        {props.children} {props.msg}
      </div>
    </Wrap>
  );
};
