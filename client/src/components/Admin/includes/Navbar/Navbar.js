import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, AppBar } from "@material-ui/core";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.AdminHome_appBar} position="static">
      <Container>
          <nav>
            <Container>
              <div class="text-center">
                <Button class="nav-brand text-dark" component={Link} to="/home">
                  User Management System
                </Button>
              </div>
            </Container>
          </nav>
      </Container>
    </AppBar>
  );
};

export default Header;
