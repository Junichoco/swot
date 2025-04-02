import './App.css';
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ReactDOM from "react-dom/client";

import Box from "./Components/Box";

function App() {
  const [ title, SetTitle ] = useState("Enter title here");
  const titleButtonRef = useRef(null);
  const darkRed = "#E00000";
  const darkBlue = "#000AC7";

  const editTitle = () => {
    const newTitle = prompt('Enter a new title:');
    if(newTitle !== null && newTitle.trim() !==""){
      SetTitle(newTitle);
    }
  }

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Montserrat",
          fontSize: "3rem",
        }}
      >
        <div id="top-header">
          SWOT Analysis
        </div>
        <div className="swot-header">
          <div style={{display: "flex", position: "relative", padding: "0px 50px 0px 50px"}}>
            <h2 id="swot-title" onClick={() => editTitle()}>{title}</h2>
          </div>
        </div>
        <div className="swot-chart">

          <Box
            title="Strengths"
            color={darkBlue}
          />
          <Box
            title="Weaknesses"
            color={darkRed}
          />
          <Box
            title="Opportunities"
            color={darkBlue}
          />
          <Box
            title="Threats"
            color={darkRed}
          />
        </div>
      </Row>
    </Container>
  );
}

export default App;
