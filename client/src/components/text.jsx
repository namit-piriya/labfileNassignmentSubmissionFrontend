import React from "react";
export default (props) => {
  let styleObj = {
    color: props.color || "black",
    fontSize: props.fontSize || "1.8rem",
    fontFamily: props.fontFamily || "roboto",
    display: props.display || "block",
  };
  return <div style={styleObj}>{props.text}</div>;
};
