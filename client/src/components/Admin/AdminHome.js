import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Grid } from "@material-ui/core";

import Navbar from "./includes/Navbar/Navbar"
import Users from "./Users/Users";
import UserFrom from "./UserFrom/UserFrom";
import "./includes/index.css";

import { getUsers } from "../../actions/Admin/User";

const AdminHome = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [currentId, dispatch]);

  return (
    <React.Fragment>
      <Navbar />
        <Container maxWidth="lg">
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={8}>
              <Users setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <UserFrom currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
    </React.Fragment>
  );
};

export default AdminHome;
