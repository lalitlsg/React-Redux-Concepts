import { BUY_TEA } from "./teaTypes";

const initialState = {
  teaQty: 10
};

const teaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_TEA:
      return {
        ...state,
        teaQty: state.teaQty - 1
      };
    default:
      return state;
  }
};

export default teaReducer;
