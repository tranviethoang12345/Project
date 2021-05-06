import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Grid, LinearProgress, Container } from "@material-ui/core";

import User from "./User/User";
import useStyles from "./styles";

const Users = ({ setCurrentId }) => {
  const classes = useStyles();
  const users = useSelector((state) => state.users);

  const [progress, setProgress] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return !users.length ? (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  ) : (
    <Grid>
      <Container>
        {/* include show all */}
        <tr>
          {users.map((user) => (
            <Grid key={user._id}>
              <User user={user} />
            </Grid>
          ))}
        </tr>
      </Container>
    </Grid>
  );
};

export default Users;
