import React, { Component } from "react";
import puce from "./puce.png";
import CardForm from "./form";
import "./App.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "12545",
      valid: "1254",
      name: "hgf"
    };
  }
  getValues = obj => {
    this.setState({
      number: obj.number,
      valid: obj.valid,
      name: obj.name
    });
  };

  render() {
    return (
      <div className="d-flex mt-3" style={{ height: "280px" }}>
        <div className="card mx-3">
          <p className="title">Company name</p>
          <div className="  d-flex">
            <div className="content">
              <img className="ml-3" width="50" height="40" src={puce} />
              <p className="number">{this.state.number}</p>
              <p className="valid">{this.state.valid}</p>
              <p className="name">{this.state.name}</p>
            </div>
            <div className="h-100 d-flex flex-column justify-content-end">
              <img
                className=""
                width="100px"
                height="60px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
              />
            </div>
          </div>
        </div>
        <div className="form  h-100 d-flex flex-column justify-content-center ">
          <CardForm getData={this.getValues} />
        </div>
      </div>
    );
  }
}

export default Card;
