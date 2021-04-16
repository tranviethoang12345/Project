import React from "react";
import Header from "./includes/Header";
import Navbar from "./includes/Navbar";
import CZMeeting from "./includes/sections/CZMeeting"
import Workspace from "./includes/sections/Workspace"
import Footer from "./includes/Footer";
import "./includes/index.css";

const Home = () => {
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
