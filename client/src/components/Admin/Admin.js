import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Button } from "@material-ui/core";

import Header from "./includes/Header";
import Users from "./Users/Users";
import "./includes/index.css";

import { getUsers } from "../../actions/Admin/User";

const Admin = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [currentId, dispatch]);

  return (
    <React.Fragment>
      <Header />

      <main id="site-main">
        <div class="container">
          <div class="box-nav d-flex-justify-between">
            <Button class="border-shadow" component={Link} to="/admin/newUser">
              <span class="text-gradient">
                New User <i class="fas fa-user"></i>
              </span>
            </Button>
          </div>

          {/* User Form */}
          <Users setCurrentId={setCurrentId}/>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Admin;
