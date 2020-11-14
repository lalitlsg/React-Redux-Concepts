import "./App.css";
import { Provider } from "react-redux";

import store from "./Redux/store";
import HooksCoffeeContainer from "./Components/HooksCoffeeContainer";
import TeaContainer from "./Components/TeaContainer";
import CoffeeContainer from "./Components/CoffeeContainer";
import HooksTeaContainer from "./Components/HooksTeaContainer";
import NewCoffeeContainer from "./Components/NewCoffeeContainer";
import ItemContainer from "./Components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer coffee />
        <ItemContainer />
        <hr />
        <CoffeeContainer />
        <HooksCoffeeContainer />
        <NewCoffeeContainer />
        <hr />
        <TeaContainer />
        <HooksTeaContainer />
      </div>
    </Provider>
  );
}

export default App;
