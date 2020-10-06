import React from "react";
import { Button } from "./button";
import Text from "./text";
import Styles from "../css/styles.module.css";
import Wrap from "../hoc/wrap";

let card = (props) => {
  return (
    <Wrap>
      <div className={Styles.Card}>
        <Text fontSize="2rem" text={props.title}></Text>
        {props.text ? <Text text={props.text}></Text> : ""}
        {props.btnTitle ? (
          <Button name={props.btnTitle} handler={props.btnHandler}></Button>
        ) : (
          ""
        )}
      </div>
    </Wrap>
  );
};

export { card as Card };
