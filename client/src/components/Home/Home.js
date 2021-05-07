import React, { useEffect } from "react";
import { Typography, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Header from "./includes/Header";
import Navbar from "./includes/Navbar/Navbar";
import CZMeeting from "./includes/sections/CZMeeting";
import Workspace from "./includes/sections/Workspace";
import Footer from "./includes/Footer";
import "./includes/index.css";

const Home = () => {
  useEffect(() => {
    console.log("Enter Page Home");
    document.body.classList.add("home-body");

    return () => {
      console.log("Leave Page Home");
      document.body.classList.remove("home-body");
    };
  }, []);

  const user = JSON.parse(localStorage.getItem('profile'));
  if (!user?.result?.name) {
    return (
      <Paper align="center">
        <Typography variant="h6">
          Please Sign In to create your own account.
        </Typography>
        <Button component={Link} to="/" >Login</Button>
      </Paper>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <Navbar />

      {/* Chat Zoom - Meeting */}
      <CZMeeting />

      {/* Workspace */}
      <Workspace />

      <Footer />
    </React.Fragment>
  );
};

export default Home;
