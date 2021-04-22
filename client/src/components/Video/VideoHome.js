import React, { useEffect } from "react";
import { Typography, AppBar } from "@material-ui/core";

import VideoPlayer from "./VideoPlayer";
import Sidebar from "./Sidebar";
import Notifications from "./Notifications";
import {ContextProvider} from "./Context";

import useStyles from "./includes/styles";
import "./includes/styles.css";

const VideoHome = () => {
  const classes = useStyles();

  useEffect(() => {
    console.log("enter page");
    document.body.classList.add("zoom-body");

    return () => {
      console.log("leave page");
      document.body.classList.remove("zoom-body");
    };
  }, []);

  return (
    <ContextProvider>
      <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h2" align="center">
            Video Chat
          </Typography>
        </AppBar>
        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
    </ContextProvider>
  );
};

export default VideoHome;
