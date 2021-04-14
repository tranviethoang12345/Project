import React from "react";
import "./includes/index";

import SignIn from "./signIn";
import SignUp from "./signUp";
import Panel from "./includes/panel";

export const Auth = () => {
  return (
    <React.Fragment>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            {/* include sign in */}
            <SignIn />

            {/* include sign up */}
            <SignUp />
          </div>
        </div>
        {/* include panel */}
        <Panel />
      </div>
    </React.Fragment>
  );
};

export default Auth;
