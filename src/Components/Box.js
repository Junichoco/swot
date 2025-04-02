import React, { Component, useRef } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faSquareXmark } from '@fortawesome/free-solid-svg-icons'


class Box extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
        userInput: "",
        list: [],
    };
  }
  updateInput(value) {
    this.setState({
        userInput: value,
    });
  }
  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
          id: Math.random(),
          value: this.state.userInput,
      };

      const list = [...this.state.list];
      list.push(userInput);

      this.setState({
          list,
          userInput: "",
      });

      // console.log("monkey");
    }
  }
  deleteItem(key) {
    const list = [...this.state.list];

    const updateList = list.filter((item) => item.id !== key);

    this.setState({
        list: updateList,
    });
  }

  editItem = (index) => {
    const points = [...this.state.list];
    const newPoint = prompt('Edit this bullet point:');
    if (newPoint !== null && newPoint.trim() !== '') {
      let updatedPoints = [...points]
      updatedPoints[index].value= newPoint
      this.setState({
        list: updatedPoints,
    });
    }
  }

  render(){
    const {title, color} = this.props;

    return(
      <div className="swot-div" style={{border: `2px solid ${color}`}}>
        <span style={{color: `${color}`}}><h2>{title}</h2></span>
          <ListGroup>
            {this.state.list.map((item, index) => {
              return(
                <ListGroup.Item style={{padding:"6px"}}>
                  <div key={index} className="swot-item">
                    <div className="swot-item-point" onClick={() => this.editItem(index)}>
                      <p>{item.value}</p>
                      {/* <div id={`buttons-${title}-${index}`} className="item-buttons">
                      </div> */}
                    </div>
                    <Button
                      className="item-btn"
                      style={{fontSize:"small", padding:"2px 5px 2px 5px"}}
                      onClick={() => this.deleteItem(item.id)}>
                        <FontAwesomeIcon icon={faSquareXmark} />
                    </Button>
                  </div>
                </ListGroup.Item>
              )
            })}
          </ListGroup>

        <InputGroup style={{marginTop: "10px"}}>
          <FormControl
            placeholder='Add item'
            value={this.state.userInput}
            onChange={(item) =>
              this.updateInput(item.target.value)
          }
          />
          <Button
            onClick={() => {
              this.addItem();
              // console.log(this.state.userInput);
            }}
          >
            Add
          </Button>
        </InputGroup>
      </div>
    )
  }
}

export default Box
