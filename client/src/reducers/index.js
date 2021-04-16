import { combineReducers } from "redux";
import auth from "./Auth/Auth";
import workspace from "./Workspace/posts";

export default combineReducers({ auth: auth, workspace: workspace});
