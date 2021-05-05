import React, { useEffect } from "react";
import { Container } from "@material-ui/core";

import VideoPlayer from "../includes/VideoPlayer/VideoPlayer";
import Sidebar from "../includes/Sidebar/Sidebar";
import Notifications from "../includes/Notifications";
import Navbar from "../../Workspace/includes/Navbar/Navbar";
import { ContextProvider } from "../SocketContext";

import useStyles from "./styles";
import "../includes/styles.css";

const VideoHome = () => {
  const classes = useStyles();

  useEffect(() => {
    document.body.classList.add("zoom-body");
    return () => {
      document.body.classList.remove("zoom-body");
    };
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

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
        <div>
          <button onClick={refreshPage}>Click to reload!</button>
        </div>
      </div>
    </ContextProvider>
  );
};

export default VideoHome;
