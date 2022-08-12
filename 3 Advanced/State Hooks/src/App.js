import React, { useState,useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const ifStoredUserLoggedIn = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  // useEffect runs after every components evaluation
  useEffect(() => {
    console.log(">>>>>>.", ifStoredUserLoggedIn)
    if (ifStoredUserLoggedIn==='1') {
      // after setting it function will run again.

      setIsLoggedIn(true);
    }
    return () => {};
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);

    localStorage.removeItem('isLoggedIn')

  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
