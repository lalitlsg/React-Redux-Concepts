import "./App.css";
import { Provider } from "react-redux";

import store from "./Redux/store";
import HooksCoffeeContainer from "./Components/HooksCoffeeContainer";
import TeaContainer from "./Components/TeaContainer";
import CoffeeContainer from "./Components/CoffeeContainer";
import HooksTeaContainer from "./Components/HooksTeaContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CoffeeContainer />
        <HooksCoffeeContainer />
        <hr />
        <TeaContainer />
        <HooksTeaContainer />
      </div>
    </Provider>
  );
}

export default App;
