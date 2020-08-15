import { combineReducers } from "redux";

import authReducer from '../pages/auth/reducer.js';

export default combineReducers({
    auth: authReducer
});
