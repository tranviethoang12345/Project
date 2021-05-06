import React, { useEffect } from "react";

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
