import { addMessage, addUser } from './actions';
import * as types from './constants/ActionTypes';

const message = 'Something';
const author = 'Bob';
const authorColor = '#fff';
const authorAvatar = 'https://cutt.ly/3x1SIV0';
const isPublic = true;

describe('adding a message', () => {
  it('should create an action to add a message with id 0', () => {
    const action = {
      type: types.ADD_MESSAGE,
      message: message,
      author: 'Bob',
      authorColor: '#fff',
      authorAvatar: 'https://cutt.ly/3x1SIV0',
      isPublic: true,
      id: 0,
    };
    expect(addMessage(message, author, authorColor, authorAvatar, isPublic)).toEqual(action);
  });
});

describe('adding a second message', () => {
  it('should create an action to add a message with id 1', () => {
    const message = 'Something';
    const action = {
      type: types.ADD_MESSAGE,
      message: message,
      author: 'Bob',
      authorColor: '#fff',
      authorAvatar: 'https://cutt.ly/3x1SIV0',
      isPublic: true,

      id: 1,
    };
    expect(addMessage(message, author, authorColor, authorAvatar, isPublic)).toEqual(action);
  });
});

describe('adding a user', () => {
  it('should create an action to add a user with id 0', () => {
    const user = 'Mark';
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 0,
    };
    expect(addUser(user)).toEqual(action);
  });
});

describe('adding a second user', () => {
  it('should create an action to add a message with id 1', () => {
    const user = 'Tony';
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 1,
    };
    expect(addUser(user)).toEqual(action);
  });
});
