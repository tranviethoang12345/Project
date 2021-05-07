import { combineReducers } from 'redux';
import auth from './Auth/Auth';
import users from './Admin/Users';
import posts from './Workspace/Posts';

export default combineReducers({ auth: auth, users: users, posts: posts });
