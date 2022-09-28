import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="App">
      <NavBar />
   
        <Route path="/" >
        <Home />
        </Route>
        <Route path="/signin" >
        <Signin/>
        </Route>
        <Route path="/account">
        <Account />
        </Route>
      
    </div>
  );
}

export default App;
