import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Authenticator
import Auth from './components/Auth/Auth';
// Home
import Home from './components/Home/Home';
// Zoom
import VideoHome from './components/Video/VideoHome';
// Workspace
import Workspace from './components/Workspace/Workspace';
// Admin
import Admin from './components/Admin/Admin';
import AddUser from './components/Admin/Users/User/NewUser';
import UpdateUser from './components/Admin/Users/User/UpdateUser';

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
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/newUser" exact component={AddUser} />
        <Route path="/admin/updateUser" exact component={UpdateUser} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
