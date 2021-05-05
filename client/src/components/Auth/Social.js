import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { AUTH } from "../../constants/actionTypes";

const Social = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => {
    alert("Google Sign In was unsuccessful. Try again later");
    history.push("/");
  };

  return (
    <div class="social-media">
      <FacebookLogin
        appId="330839701966654"
        autoLoad={false}
        render={(renderProps) => (
          <Button class="social-icon" onClick={renderProps.onClick}>
            <i class="fab fa-facebook-f"></i>
          </Button>
        )}
        onClick={googleSuccess}
        callback={googleError}
        cookiePolicy="single_host_origin"
      />

      <GoogleLogin
        clientId="514550539871-ib8ne88cdovra2vci2nhs3911hrsp18h.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button class="social-icon" onClick={renderProps.onClick}>
            <i class="fab fa-google"></i>
          </Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleError}
        cookiePolicy="single_host_origin"
      />

      <button class="social-icon">
        <i class="fab fa-twitter"></i>
      </button>

      <button class="social-icon">
        <i class="fab fa-linkedin-in"></i>
      </button>
    </div>
  );
};

export default Social;
