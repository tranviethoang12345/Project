import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';

import { signIn } from '../../actions/Auth/auth';

const initialState = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formData, history));
  };

  const handleChange = (e) => {
    console.log(e);
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
        <p class="social-text">Or Sign in with social platforms</p>
        <div class="social-media">
          <button class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button class="social-icon">
            <i class="fab fa-twitter"></i>
          </button>
          <button class="social-icon">
            <i class="fab fa-google"></i>
          </button>
          <button class="social-icon">
            <i class="fab fa-linkedin-in"></i>
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignIn;
