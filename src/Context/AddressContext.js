import React, { Component } from "react";

const AddressContext = React.createContext();

export class AddressProvider extends Component {
  state = {
    currentAddress: {
      firstLine: null,
      secondLine: null,
      thirdLine: null,
    },
  };

  changeCurrentAddress = (name, value) => {
    if (name === "address-txtfield") {
      this.setState({
        currentAddress: { ...this.state.currentAddress, firstLine: value },
      });
    }
    if (name === "flat-txtfield") {
      this.setState({
        currentAddress: { ...this.state.currentAddress, secondLine: value },
      });
    }
    if (name === "landmark-txtfield") {
      this.setState({
        currentAddress: { ...this.state.currentAddress, thirdLine: value },
      });
    }
  };

  render() {
    const { currentAddress } = this.state;
    const { changeCurrentAddress } = this;
    const { children } = this.props;
    return (
      <AddressContext.Provider
        value={{
          currentAddress,
          changeCurrentAddress,
        }}
      >
        {children}
      </AddressContext.Provider>
    );
  }
}

export default AddressContext;
