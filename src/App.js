import "./App.css";
import { Provider } from "react-redux";

import Coffee from "./Components/CoffeeContainer";
import store from "./Redux/store";
import HooksCoffeeContainer from "./Components/HooksCoffeeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Coffee />
        <hr />
        <HooksCoffeeContainer />
      </div>
    </Provider>
  );
}

export default App;
