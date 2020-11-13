import React from "react";
import { connect } from "react-redux";
import { buyCoffee } from "../Redux";

function CoffeeContainer(props) {
  return (
    <div>
      <h2>Coffee Quantity: {props.coffeeQty}</h2>
      <button onClick={props.buyCoffee}>Buy Coffee</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    coffeeQty: state.coffeeQty
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCoffee: () => dispatch(buyCoffee())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContainer);
