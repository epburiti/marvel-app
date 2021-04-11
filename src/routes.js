import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Credentials from "./pages/Credentials";
import Home from "./pages/Home";
const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Credentials} path="/" exact />
      <Route component={Home} path="/Home" />
    </BrowserRouter>
  );
}

export default Routes;