import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./base/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import PanelView from "./pages/PanelView";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
       <Projects/>
      </Route>
      
      <Route path="/login">
       <Login/>
      </Route>
    </div>
  );
}

export default App;
