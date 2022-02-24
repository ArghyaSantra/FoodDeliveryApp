import React, { useState } from "react";

function CartCounterButton(props) {
  const [quantity, setQuantity] = useState();
  return (
    <div className="cartCtrBtn">
      <button onClick={() => setQuantity((state) => state + 1)}>+</button>
      <input className="quantity" type="text" value={props.qty}></input>
      <button>-</button>
    </div>
  );
}

export default CartCounterButton;
