import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class AddressBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedFlag: false,
    };
  }

  clicked = () => {
    if (!this.state.clickedFlag) this.setState({ clickedFlag: true });
    else {
      this.setState({ clickedFlag: false });
    }
  };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          onClick={this.clicked}
          color={this.state.clickedFlag ? "primary" : "default"}
        >
          {this.props.name}
        </Button>
      </div>
    );
  }
}

export default AddressBtn;
