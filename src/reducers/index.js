import { combineReducers } from 'redux';
import messages from './messages/messages';
import users from './users/users';

const reducers = combineReducers({
  messages,
  users,
});

export default reducers;
