import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./cartCounterButton.css";
import { TextField } from "@material-ui/core";

class CartCounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      count: 0,
    };
  }

  itemAdded = () => {
    this.setState({ count: 1, clicked: true });
  };

  increment = () => {
    let count = this.state.count;
    this.setState((state) => {
      return { ...state, count: ++state.count };
    });
    this.props.itemCount(count + 1);
  };

  decrement = () => {
    let count = this.state.count;
    this.setState((state) => {
      if (state.count > 0) {
        return { ...state, count: --state.count };
      }

      this.props.itemCount(count - 1);
    });
  };

  render() {
    return (
      <div className="cartCounterBtn">
        {/*!this.state.clicked && (
          <Button variant="contained" color="primary" onClick={this.itemAdded}>
            Add
          </Button>
        )*/}

        <Button variant="contained" onClick={this.increment}>
          +
        </Button>
        <TextField
          id="outlined-basic"
          label=""
          value={this.state.count}
          variant="outlined"
        />
        <Button variant="contained" onClick={this.decrement}>
          -
        </Button>
      </div>
    );
  }
}
export default CartCounterButton;
