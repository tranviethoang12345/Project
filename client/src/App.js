import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import VideoHome from './components/Video/VideoHome';
import Workspace from './components/Workspace/Workspace';

import AddUser from './components/Admin/includes/NewUser';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Sign In - Sign Up */}
        <Route path="/" exact component={Auth} />
        {/* Home */}
        <Route path="/home" exact component={Home} />
        {/* Cam */}
        <Route path="/video" exact component={VideoHome} />
        {/* Workspace */}
        <Route path="/workspace" exact component={Workspace} />
        {/* Admin */}
        <Route path="/admin" exact component={Admin} />
        <Route path="/addUser" exact component={AddUser} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default App;
