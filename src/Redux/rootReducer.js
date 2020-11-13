import { combineReducers } from "redux";
import coffeeReducer from "./coffee/coffeeReducer";
import teaReducer from "./tea/teaReducer";

const rootReducer = combineReducers({
  coffee: coffeeReducer,
  tea: teaReducer
});

export default rootReducer;
