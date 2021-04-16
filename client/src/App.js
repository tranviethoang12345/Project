import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Workspace from "./components/Workspace/Home";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          {/* Sign In - Sign Up */}
          <Route path="/" exact component={Auth} />
          <Route path="/home" exact component={Home} />
          <Route path="/workspace" exact component={Workspace} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
