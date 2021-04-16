import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          {/* Sign In - Sign Up */}
          <Route path="/" exact component={Auth} />
          <Route path="/home" exact component={Home} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
