import * as types from '../constants/ActionTypes';
import { addUser, messageReceived, populateUsersList } from '../actions';

/**
 * Build the socket to link client side actions with ws event listeners
 * @param {object} function - dispatch function for redux
 * @param {string} username - a random username
 * @returns {instance} - a web socket instance
 */
const setupSocket = (dispatch, username, usercolor, avatar) => {
  const socket = new WebSocket('ws://localhost:7100');
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: types.ADD_USER,
        name: username,
        color: usercolor,
        avatar: avatar,
      })
    );
  };
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author, data.authorColor, data.authorAvatar, data.isPublic));
        break;

      case types.ADD_USER:
        dispatch(addUser(data.name, data.usercolor));
        break;

      case types.USERS_LIST: {
        dispatch(populateUsersList(data.users));
        break;
      }
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
