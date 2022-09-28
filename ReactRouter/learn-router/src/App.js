import "./App.css";

import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">

      <header>
        
      </header>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
