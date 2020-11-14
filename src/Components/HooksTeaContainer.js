import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyTea } from "../Redux";

function HooksTeaContainer() {
  const teaQty = useSelector(state => state.tea.teaQty);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hooks Tea Quantity: {teaQty}</h2>
      <button onClick={() => dispatch(buyTea())}>Buy Tea</button>
    </div>
  );
}

export default HooksTeaContainer;
