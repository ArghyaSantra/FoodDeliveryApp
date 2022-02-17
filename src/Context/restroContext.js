import React, { Component } from "react";

const RestroContext = React.createContext();

export class RestroProvider extends Component {
  state = {
    currentRestro: null,
  };

  changeCurrentRestro = (restroClicked) => {
    this.setState({
      currentRestro: restroClicked,
    });
  };

  render() {
    const { currentRestro } = this.state;
    const { changeCurrentRestro } = this;

    return (
      <RestroContext.Provider
        value={{
          currentRestro,
          changeCurrentRestro,
        }}
      >
        {this.props.children}
      </RestroContext.Provider>
    );
  }
}

export default AppContext;
