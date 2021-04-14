import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          {/* Login - Sign Up */}
          <Route path="/" exact component={Auth} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
