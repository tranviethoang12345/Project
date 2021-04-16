import React from "react";

const SignUp = () => {
  return (
    <React.Fragment>
      <form
        action="/admin/api/users"
        method="POST"
        class="sign-up-form"
        id="registration"
      >
        <h2 class="registration">Register</h2>

        {/* Username */}
        <div class="input-field">
          <i class="fas fa-user"></i>
          <input
            type="text"
            name="username"
            value=""
            id=""
            placeholder="Username"
          />
          <input type="hidden" name="id" value="" id="" />
        </div>

        {/* Email */}
        <div class="input-field">
          <i class="fas fa-envelope"></i>
          <input type="email" name="email" value="" id="" placeholder="Email" />
        </div>

        {/* Password */}
        <div class="input-field">
          <i class="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            value=""
            id=""
            placeholder="Password"
          />
        </div>

        {/* submit Sign Up */}
        <input type="submit" class="btn" value="Sign up" />

        <p class="social-text">Or Sign up with social platforms</p>
        <div class="social-media">
          {/* class="social-icon" */}
          <i class="fab fa-facebook-f"></i>
          {/* class="social-icon" */}
          <i class="fab fa-twitter"></i>
          {/* class="social-icon" */}
          <i class="fab fa-google"></i>
          {/* class="social-icon" */}
          <i class="fab fa-linkedin-in"></i>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignUp;
