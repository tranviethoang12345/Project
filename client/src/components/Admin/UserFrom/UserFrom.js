import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  FormGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createUser, updateUser } from '../../../actions/Admin/User';

const UserFrom = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [userData, setPostData] = useState({
    username: '',
    email: '',
    status: '',
    role: '',
  });
  const [value, setValue] = React.useState('deActive');

  const user = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (user) setPostData(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0 || currentId === null) {
      dispatch(createUser({ ...userData, name: user?.result?.name }));
    } else {
      dispatch(
        updateUser(currentId, { ...userData, name: user?.result?.name })
      );
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      username: '',
      email: '',
      status: '',
      role: '',
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Editing' : 'Creating'} User
        </Typography>

        {/* Title */}
        <TextField
          name="username"
          variant="outlined"
          label="Username"
          fullWidth
          value={userData.username}
          onChange={(e) => setPostData({ ...userData, title: e.target.value })}
        />

        {/* Message */}
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          value={userData.email}
          onChange={(e) =>
            setPostData({ ...userData, message: e.target.value })
          }
        />

        {/* Status */}
        <FormControl
          component="fieldset"
          fullWidth
          className={classes.formStatus}
        >
          <FormLabel component="legend">Statues</FormLabel>
          <RadioGroup
            row
            aria-label="status"
            name="status"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="inactive"
              control={<Radio color="primary" />}
              label="Inactive"
            />
            <FormControlLabel
              value="active"
              control={<Radio color="primary" />}
              label="Active"
            />
          </RadioGroup>
        </FormControl>

        {/* Roles */}
        <FormControl component="fieldset" fullWidth className={classes.formRoles}>
          <FormLabel component="legend">Roles (process)</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox onChange={handleChange} />}
              label="Admin"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleChange} />}
              label="Staff"
            />
          </FormGroup>
        </FormControl>

        {/* Submit Button */}
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        {/* Clear Button */}
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default UserFrom;
