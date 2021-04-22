import React, { useEffect } from "react";
import { Container } from "@material-ui/core";

import VideoPlayer from "./includes/VideoPlayer";
import Sidebar from "./includes/Sidebar";
import Notifications from "./includes/Notifications";
import Navbar from "../Workspace/includes/Navbar/Navbar";
import { ContextProvider } from "./Context";

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
        <Container>
          <Navbar />
        </Container>
        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
    </ContextProvider>
  );
};

export default VideoHome;