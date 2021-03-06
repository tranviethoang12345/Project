import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { signIn } from '../../actions/Auth/Auth';
import Social from './Social';

const SignIn = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <form action="login" class="sign-in-form" onSubmit={handleSubmit}>
        <h2 class="title">Sign in</h2>

        {/* Email */}
        <div class="input-field">
          <i class="fas fa-user"></i>
          <input
            type="email"
            placeholder="Email"
            required
            autoFocus
            name="email"
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div class="input-field">
          <i class="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            required
            autoFocus
            name="password"
            onChange={handleChange}
          />
        </div>

        {/* <Submit Login */}
        <Button type="submit" value="Login" class="btn solid">
          Login
        </Button>

        {/* Social */}
        <p class="social-text">Or Sgn in with social platforms</p>
        <Social />
      </form>
    </React.Fragment>
  );
};

export default SignIn;
