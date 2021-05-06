import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Grid, Button } from "@material-ui/core";

import Header from "./includes/Header";
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
      <Header />
        <Container maxWidth="lg">
          <div class="box-nav d-flex-justify-between">
            <Button class="border-shadow" component={Link} to="/admin/newUser">
              <span class="text-gradient">
                New User <i class="fas fa-user"></i>
              </span>
            </Button>
          </div>
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
