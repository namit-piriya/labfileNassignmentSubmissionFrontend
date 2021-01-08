import React from "react";
import Card from "react-bootstrap/Card";
import "../css/styles.module.css";
import student from "../assets/images/student.jpg";
import teacher from "../assets/images/teacher.jpg";
import hod from "../assets/images/hod.jpg";
import Button from "react-bootstrap/Button";

let card = (props) => {
  let img;
  if (props.imgSrc === "student") {
    img = student;
  } else if (props.imgSrc === "teacher") {
    img = teacher;
  } else if (props.imgSrc === "hod") {
    img = hod;
  }

  const styleCard = { fontSize: "30px", color: "#1a2be8" };
  return (
    <Card className="bg-dark cardImageText">
      <Card.Img variant="top" src={img} />
      <Card.ImgOverlay>
        <Card.Title style={styleCard}>{props.title}</Card.Title>
        <Card.Body>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="info " onClick={props.btnHandler}>
            {props.btnTitle}
          </Button>
        </Card.Footer>
      </Card.ImgOverlay>
    </Card>
  );
};

export { card as Card };
