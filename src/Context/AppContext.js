import React, { Component } from "react";
import { toggleTheme } from "./themeContext.Helper";

const AppContext = React.createContext();

export class AppProvider extends Component {
  state = {
    currentRestro: null,
    currentTheme: "light",
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

  changeTheme = () => {
    const { currentTheme } = this.state;
    const updatedTheme = toggleTheme(currentTheme);
    this.setState({
      currentTheme: updatedTheme,
    });
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
    const { currentRestro, currentAddress, currentTheme } = this.state;
    const { changeCurrentRestro, changeCurrentAddress, changeTheme } = this;

    return (
      <AppContext.Provider
        value={{
          currentRestro,
          currentAddress,
          currentTheme,
          changeCurrentRestro,
          changeCurrentAddress,
          changeTheme,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;
