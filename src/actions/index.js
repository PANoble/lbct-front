import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author, authorColor, authorAvatar, isPublic) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
  authorColor,
  authorAvatar,
  isPublic,
});

export const addUser = (name, color, avatar) => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name,
  color,
  avatar,
});

export const messageReceived = (message, author, authorColor, authorAvatar, isPublic) => {
  return {
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author,
    authorColor,
    authorAvatar,
    isPublic,
  };
};

export const populateUsersList = (users) => ({
  type: types.USERS_LIST,
  users,
});
