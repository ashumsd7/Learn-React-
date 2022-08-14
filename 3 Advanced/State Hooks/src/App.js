import React, { useState,useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import CountDown from "./components/Home/CountDown";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

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
    <AuthContext.Provider value={{
      isLoggedIn:false
    }}>

      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      <CountDown/>
    </AuthContext.Provider>
  );
}

export default App;
