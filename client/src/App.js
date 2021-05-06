import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Authenticator
import Auth from "./components/Auth/Auth";
// Home
import Home from "./components/Home/Home";
// Zoom
import VideoHome from "./components/Video/VideoHome/VideoHome";
// Workspace
import Workspace from "./components/Workspace/Workspace";
// Admin
import AdminHome from "./components/Admin/AdminHome";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Sign In - Sign Up */}
        <Route path="/" exact component={Auth} />
        {/* Home */}
        <Route path="/home" exact component={Home} />
        {/* Cam */}
        <Route path="/zoom" exact component={VideoHome} />
        {/* Workspace */}
        <Route path="/workspace" exact component={Workspace} />
        {/* Admin */}
        <Route path="/admin" exact component={AdminHome} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
