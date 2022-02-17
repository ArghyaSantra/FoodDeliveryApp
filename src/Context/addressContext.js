import React, { Component } from "react";
import generateAddress from "./addressContext.Helper";

const AddressContext = React.createContext();

export class AddressProvider extends Component {
  state = {
    currentAddress: {
      firstLine: null,
      secondLine: null,
      thirdLine: null,
    },
  };

  changeCurrentAddress = (nameofTheField, value) => {
    const { currentAddress } = this.state;
    const updatedAddress = generateAddress(
      nameofTheField,
      value,
      currentAddress
    );

    this.setState({
      currentAddress: updatedAddress,
    });
  };

  render() {
    const { currentAddress } = this.state;
    const { changeCurrentAddress } = this;

    return (
      <AppContext.Provider
        value={{
          currentAddress,
          changeCurrentAddress,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;
