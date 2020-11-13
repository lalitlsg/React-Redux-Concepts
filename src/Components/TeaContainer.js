import React from "react";
import { connect } from "react-redux";
import { buyTea } from "../Redux";

function TeaContainer(props) {
  return (
    <div>
      <h2>Tea Quantity : {props.teaQty}</h2>
      <button onClick={props.buyTea}>Buy Tea</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    teaQty: state.tea.teaQty
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyTea: () => dispatch(buyTea())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaContainer);
