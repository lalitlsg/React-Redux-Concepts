import { createStore } from "redux";
import coffeeReducer from "./coffee/coffeeReducer";

const store = createStore(coffeeReducer);

export default store;
