import React from "react";
import { useSelector } from "react-redux";

import { Grid, CircularProgress, Container } from "@material-ui/core";

import User from "./User/User";
const Users = ({ setCurrentId }) => {
  const users = useSelector((state) => state.users);

  return !users.length ? (
    <CircularProgress />
  ) : (
    <Grid>
      <Container>
            {/* include show all */}
            <tr>
              {users.map((user) => (
                <Grid key={user._id} >
                  <User user={user} />
                </Grid>
              ))}
            </tr>
            </Container>
    </Grid>
  );
};

export default Users;
