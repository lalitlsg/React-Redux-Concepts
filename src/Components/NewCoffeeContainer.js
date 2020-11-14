import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCoffee } from "../Redux";

function NewCoffeeContainer(props) {
  const [qty, setQty] = useState(1);
  return (
    <div>
      <h2>New Coffee Quantity : {props.coffeeQty}</h2>
      <input type="text" value={qty} onChange={e => setQty(e.target.value)} />
      <button onClick={() => props.buyCoffee(qty)}>Buy {qty} Coffee</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    coffeeQty: state.coffee.coffeeQty
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCoffee: qty => dispatch(buyCoffee(qty))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCoffeeContainer);
