import React from "react";

import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from "reactstrap";

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberValue: "",
      validValue: ""
    };
  }

  onChangeNumber = e => {
    let val = e.target.value;
    if (val.length <= 19) {
      // to stop user writing in input when he pass 19 characters
      this.props.getNumber(val);
      if (val.length === 4 || val.length === 9 || val.length === 14) {
        this.setState({ numberValue: val + " " });
      } else {
        this.setState({ numberValue: val });
      }
    }
  };
  onChangeValid = e => {
    let val = e.target.value;
    if (val.length <= 5) {
      // to stop user writing in input when he pass 19 characters
      if (val.length === 2) {
        this.setState({ validValue: val + "/" });
      } else {
        this.setState({ validValue: val });
      }

      this.props.getValid(val);
    }
  };
  onChangeName = e => {
    let val = e.target.value;
    this.props.getName(val);
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="examplePassword">Number:</Label>
          <Input
            type="text"
            name=""
            id=""
            placeholder=" "
            readOnly={this.state.readOnly}
            value={this.state.numberValue}
            onChange={this.onChangeNumber}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Name:</Label>
          <Input
            type="text"
            name=""
            id=""
            placeholder=""
            //  value={this.state.nameValue}
            onChange={this.onChangeName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">ValidThru:</Label>
          <Input
            type="text"
            name=""
            id=""
            readOnly={false}
            placeholder=""
            value={this.state.validValue}
            onChange={this.onChangeValid}
          />
        </FormGroup>
      </Form>
    );
  }
}
