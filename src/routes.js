import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Credentials from './pages/Credentials';
import Description from './pages/Description';
import Home from './pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Credentials} path="/" exact />
      <Route component={Home} path="/Home" />
      <Route component={Description} path="/Description/:idCharacter" />
    </BrowserRouter>
  );
};

export default Routes;
