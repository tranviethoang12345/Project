import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  FormGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createUser, updateUser } from '../../../actions/Admin/User';

const UserFrom = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    status: '',
    role: '',
  });
  const [value, setValue] = useState('active');
  const [showPassword, setShowPassword] = useState(false);

  const user = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0 || currentId === null) {
      dispatch(createUser({ ...userData }));
    } else {
      dispatch(updateUser(currentId, { ...userData }));
    }
    clear();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => {
    setCurrentId(null);
    setUserData({
      username: '',
      email: '',
      password: '',
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
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />

        {/* Email */}
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />

        {/* Password */}
        <TextField
          name="password"
          variant="outlined"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          InputProps={
            'password'
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {'password' ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
        />

        {/* Repeat Password
        <TextField
          name="confirmPassword"
          variant="outlined"
          label="Repeat Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={userData.confirmPassword}
          onChange={(e) =>
            setUserData({ ...userData, confirmPassword: e.target.value })
          }

          InputProps={
            'confirmPassword'
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {'password' ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
        /> */}

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
            {/* Active */}
            <FormControlLabel
              value="active"
              control={<Radio color="primary" />}
              label="Active"
            />

            {/* Inactive */}
            <FormControlLabel
              value="inactive"
              control={<Radio color="primary" />}
              label="Inactive"
            />
          </RadioGroup>
        </FormControl>

        {/* Roles */}
        <FormControl
          component="fieldset"
          fullWidth
          className={classes.formRoles}
        >
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
