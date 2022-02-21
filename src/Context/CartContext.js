import React, { Component } from "react";

const CartContext = React.createContext();

export class CartProvider extends Component {
  state = {
    cart: [],
  };

  changeCartDetails = (updatedCart) => {
    this.setState({
      cart: updatedCart,
    });
  };

  render() {
    const { cart } = this.state;
    const { changeCartDetails } = this;
    const { children } = this.props;
    return (
      <CartContext.Provider
        value={{
          cart,
          changeCartDetails,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  }
}

export default CartContext;
