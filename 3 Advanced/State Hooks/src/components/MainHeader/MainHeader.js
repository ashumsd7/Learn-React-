import React, { useContext } from "react";

import Navigation from "./Navigation";
import AuthContext from "../store/auth-context";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const ctx = useContext(AuthContext);
  return (

    <header className={classes["main-header"]}>
      <h1>A Typical Page {ctx.isLoggedIn}</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>

  );
};

export default MainHeader;
