import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function App() {
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
        SWOT Analysis
        <div className="swot-chart">
          <div className="swot-div">
            <h2>Strengths</h2>
          </div>
          <div className="swot-div">
            <h2>Weaknesses</h2>
          </div>
          <div className="swot-div">
            <h2>Opportunities</h2>
          </div>
          <div className="swot-div">
            <h2>Threats</h2>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default App;
