import React, { Component } from "react";

const AppContext = React.createContext();

export class AppProvider extends Component {
  state = {
    currentRestro: null,
    currentAddress: {
      firstLine: null,
      secondLine: null,
      thirdLine: null,
    },
  };

  changeCurrentRestro = (restroClicked) => {
    this.setState({
      currentRestro: restroClicked,
    });
  };

  changeCurrentAddress = (name, value) => {
    if (name === "address-txtfield") {
      this.setState({
        ...this.state,
        currentAddress: { ...this.state.currentAddress, firstLine: value },
      });
    }
    if (name === "flat-txtfield") {
      this.setState({
        ...this.state,
        currentAddress: { ...this.state.currentAddress, secondLine: value },
      });
    }
    if (name === "landmark-txtfield") {
      this.setState({
        ...this.state,
        currentAddress: { ...this.state.currentAddress, thirdLine: value },
      });
    }
  };

  render() {
    const { currentRestro, currentAddress } = this.state;
    const { changeCurrentRestro, changeCurrentAddress } = this;
    return (
      <AppContext.Provider
        value={{
          currentRestro,
          currentAddress,
          changeCurrentRestro,
          changeCurrentAddress,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;
