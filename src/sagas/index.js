import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

/**
 * Generator function to handle message dispatching
 * @param {object} params - Object composed of a random name generated and sockets linked to redux actions
 * @returns {void}
 */
const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = params.username;
    action.authorAvatar = params.avatar;
    action.authorColor = params.usercolor;
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
