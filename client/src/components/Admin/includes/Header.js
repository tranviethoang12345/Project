import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';

const Header = () => {
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
