import React from "react";

import { Button } from '@material-ui/core';

const SignUp = (handleSubmit, handleChange) => {
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

        <p class="social-text">Or Sign up with social platforms</p>
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

export default SignUp;
