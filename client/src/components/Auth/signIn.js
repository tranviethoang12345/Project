import React from "react";

const SignIn = (props) => {
  const handleSignIn = () => {
    props.history.push("/home")
  }
  return (
    <React.Fragment>
      <form action="login" class="sign-in-form" onSubmit={handleSignIn}>
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

export default SignIn;
