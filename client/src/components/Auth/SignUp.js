import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { signUp } from '../../actions/Auth/Auth';
import Social from './Social';

const SignUp = () => {
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <form class="sign-up-form" onSubmit={handleSubmit}>
        <h2 class="title">Register</h2>

        {/* Username */}
        <div class="input-field">
          <i class="fas fa-user"></i>
          <input
            type="text"
            name="username"
            required
            autoFocus
            placeholder="Username"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div class="input-field">
          <i class="fas fa-envelope"></i>
          <input
            type="email"
            name="email"
            required
            autoFocus
            placeholder="Email"
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div class="input-field">
          <i class="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            required
            autoFocus
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        {/* submit Sign Up */}
        <Button type="submit" class="btn" value="Sign up">
          Sign up
        </Button>

        {/* Social */}
        <p class="social-text">Or Sign up with social platforms</p>
        <Social />
      </form>
    </React.Fragment>
  );
};

export default SignUp;
