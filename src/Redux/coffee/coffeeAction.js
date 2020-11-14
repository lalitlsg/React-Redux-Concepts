import { BUY_COFFEE } from "./coffeeTypes";

export const buyCoffee = (qty = 1) => {
  return {
    type: BUY_COFFEE,
    payload: qty
  };
};
