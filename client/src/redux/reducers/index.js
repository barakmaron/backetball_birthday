import { combineReducers } from "redux";
import calendarReducer from './calenderReducer';
import viewReducer from './viewReducer';
import imageReducer from './imagesReducer';
import userReducer from './userReducer';

export default combineReducers({
    calendarReducer,
    imageReducer,
    userReducer,
    viewReducer
});
