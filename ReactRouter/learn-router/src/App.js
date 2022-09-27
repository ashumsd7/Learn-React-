import "./App.css";

import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Route path="/welcome">
        <Welcome />
      </Route>

      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
