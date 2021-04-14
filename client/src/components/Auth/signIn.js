import React from "react";

const login = () => {
  return (
    <form action="login" method="POST" class="sign-in-form">
      <h2 class="title">Sign in</h2>

      {/* Email */}
      <div class="input-field">
        <i class="fas fa-user"></i>
        <input type="email" placeholder="Email" name="email" />
      </div>

      {/* Password */}
      <div class="input-field">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" name="password" />
      </div>

      {/* <Submit Login */}
      <input type="submit" value="Login" class="btn solid" />

      {/* Social */}
      <p class="social-text">Or Sign in with social platforms</p>
      <div class="social-media">
        <a href="#" class="social-icon">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-google"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
};

export default login;
