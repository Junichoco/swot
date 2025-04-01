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

  const editTitle = () => {
    const newTitle = prompt('Enter a new title:');
    if(newTitle !== null && newTitle.trim() !==""){
      SetTitle(newTitle);
    }
  }

  const showTitleButton = () => {
    // console.log(titleButtonRef);
    titleButtonRef.current.classList.remove("d-none");
  }
  const hideTitleButton = () => {
    titleButtonRef.current.classList.add("d-none");
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
        <div className="swot-header" onMouseOver={() => showTitleButton()} onMouseOut={() => hideTitleButton()}>
          <div style={{display: "flex", position: "relative", padding: "0px 50px 0px 50px"}}>
            <h2>{title}</h2>
              <div className="title-btn d-none" ref={titleButtonRef} onClick={() => editTitle()} >
                Edit
              </div>
          </div>
        </div>
        <div className="swot-chart">
          <Box
            title="Strengths"
            color="blue"
          />
          <Box
            title="Weaknesses"
            color="red"
          />
          <Box
            title="Opportunities"
            color="blue"
          />
          <Box
            title="Threats"
            color="red"
          />
        </div>
      </Row>
    </Container>
  );
}

export default App;
