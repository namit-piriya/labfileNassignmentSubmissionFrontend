import React from "react";
import LandingPage from "./container/LandingPage";
import Container from "react-bootstrap/Container";
// import Style from "./css/styles.module.css";
// import { Card } from "./components/card.jsx";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <LandingPage />
      </Container>
    </div>
  );
}

export default App;
