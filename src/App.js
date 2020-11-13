import "./App.css";
import { Provider } from "react-redux";

import store from "./Redux/store";
import HooksCoffeeContainer from "./Components/HooksCoffeeContainer";
import TeaContainer from "./Components/TeaContainer";
import CoffeeContainer from "./Components/CoffeeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CoffeeContainer />
        <HooksCoffeeContainer />
        <hr />
        <TeaContainer />
      </div>
    </Provider>
  );
}

export default App;
