import React, { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Panel from './includes/Panel';

const initialState = { username: '', email: '', password: '' };

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = (e) => {
    setIsSignUp(true);
  };
  const handleSignIn = (e) => {
    setIsSignUp(false);
  };

  return (
    <React.Fragment>
      <div class={`auth-page containerAuth  ${isSignUp ? 'sign-up-mode' : ''}`}>
        <div></div>
        <div class="forms-container">
          <div class="signin-signup">
            {/* include sign in */}
            <SignIn initialState={initialState} />

            {/* include sign up */}
            <SignUp initialState={initialState} />
          </div>
        </div>
        {/* include Panel */}
        <Panel handleSignUp={handleSignUp} handleSignIn={handleSignIn} />
      </div>
    </React.Fragment>
  );
};

export default Auth;
