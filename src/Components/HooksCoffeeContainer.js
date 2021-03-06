import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCoffee } from "../Redux";

function HooksCoffeeContainer() {
  const coffeeQty = useSelector(state => state.coffee.coffeeQty);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hooks Coffee Quantity: {coffeeQty}</h2>
      <button onClick={() => dispatch(buyCoffee())}>Buy Coffee</button>
    </div>
  );
}

export default HooksCoffeeContainer;
