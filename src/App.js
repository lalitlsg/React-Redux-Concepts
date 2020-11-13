import "./App.css";
import { Provider } from "react-redux";

import Coffee from "./Components/CoffeeContainer";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Coffee />
      </div>
    </Provider>
  );
}

export default App;
