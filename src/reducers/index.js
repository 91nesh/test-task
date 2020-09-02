import { combineReducers } from 'redux';

import homeReducer from "./homeReducer";
import friendsReducer from "./friendsReducer";

export default combineReducers({
    home: homeReducer,
    friends: friendsReducer
});