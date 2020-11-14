import { combineReducers } from "redux";
import coffeeReducer from "./coffee/coffeeReducer";
import teaReducer from "./tea/teaReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  coffee: coffeeReducer,
  tea: teaReducer,
  user: userReducer
});

export default rootReducer;
