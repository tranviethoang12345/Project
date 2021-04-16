import React, { useState } from 'react';

import SignIn from './signIn';
import SignUp from './signUp';
import Panel from './includes/Panel';

export const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const handleSignUp = (e) => {
    setIsSignup(true);
  };
  const handleSignIn = (e) => {
    setIsSignup(false);
  };

  return (
    <React.Fragment>
      <div class={`auth-page container  ${isSignup ? 'sign-up-mode' : ''}`}>
        <div class="forms-container">
          <div class="signin-signup">
            {/* include sign in */}
            <SignIn />

            {/* include sign up */}
            <SignUp />
          </div>
        </div>
        {/* include panel */}
        <Panel handleSignUp={handleSignUp} handleSignIn={handleSignIn} />
      </div>
    </React.Fragment>
  );
};

export default Auth;
