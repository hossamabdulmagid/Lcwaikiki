import { combineReducer } from 'redux';
import userReducer from './user/userreducer';
export default combineReducer({
    user: userReducer
});