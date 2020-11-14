import React from "react";
import { connect } from "react-redux";
import { buyCoffee, buyTea } from "../Redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.coffee ? state.coffee.coffeeQty : state.tea.teaQty;
  return {
    item: itemState
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.coffee
    ? () => dispatch(buyCoffee())
    : () => dispatch(buyTea());
  return {
    buyItem: dispatchFunction
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
