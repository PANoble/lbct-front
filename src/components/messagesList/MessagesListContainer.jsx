import React from 'react';
import PropTypes from 'prop-types';
import Message from '../message/MessageContainer';
import { MessagesList } from './MessagesList.css';

const MessagesListContainer = ({ messages }) => (
  <MessagesList>
    <ul>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </ul>
  </MessagesList>
);

MessagesListContainer.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      isPublic: PropTypes.bool,
    }).isRequired
  ).isRequired,
};

export default MessagesListContainer;
