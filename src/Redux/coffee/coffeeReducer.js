import { BUY_COFFEE } from "./coffeeTypes";

const initialState = {
  coffeeQty: 10
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COFFEE:
      return {
        ...state,
        coffeeQty: state.coffeeQty - 1
      };
    default:
      return state;
  }
};

export default coffeeReducer;
