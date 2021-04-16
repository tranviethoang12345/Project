import { combineReducers } from "redux";
import auth from "./Auth/Auth";
import posts from "./Workspace/posts";

export default combineReducers({ auth: auth, posts: posts});
