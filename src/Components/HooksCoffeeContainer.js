import React from "react";
import { useSelector } from "react-redux";

function HooksCoffeeContainer() {
  const coffeeQty = useSelector(state => state.coffeeQty);
  return (
    <div>
      <h2>Hooks Coffee Quantity: {coffeeQty}</h2>
      <button>Buy Coffee</button>
    </div>
  );
}

export default HooksCoffeeContainer;
