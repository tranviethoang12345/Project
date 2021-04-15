import React from "react";
import img from "../../../assets/img/auth/log.svg"

const panel = () => {
  return (
    <React.Fragment>
      <div class="panels-container">
        {/* Go Sign Up */}
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              You can sign up to your CZ-M account on the web at any time and
              anywhere, at below.
              <br />
              Once you're logged in, you can update detail your profile.
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>

          {/* Image */}
          <img src={img} class="image" alt="" />
        </div>

        {/* Go Sign In */}
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Once you're already a CZ-M user? Please click below to Login to
              your profile.
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>

          {/* Image */}
          <img src="img/auth/register.svg" class="image" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default panel;
