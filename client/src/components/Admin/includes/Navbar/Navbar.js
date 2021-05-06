import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import useStyles from './styles'

const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <header id="header">
        <nav>
          <Container>
            <div class="text-center">
              <Button class="nav-brand text-dark" component={Link} to="/home">
                User Management System
              </Button>
            </div>
          </Container>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
