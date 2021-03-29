import React from 'react';
import PropTypes from 'prop-types';
import { UserPic, UserName } from '../commons/';
import { Message, MainContent } from './Message.css';

const MessageContainer = ({ message, author, authorColor, authorAvatar, isPublic }) => {
  return isPublic ? (
    <Message>
      <UserPic src={authorAvatar} />
      <MainContent>
        <UserName userColor={authorColor}>{author}</UserName> <span>{message}</span>
      </MainContent>
    </Message>
  ) : (
    ''
  );
};

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  isPublic: PropTypes.bool.isRequired,
};
MessageContainer.defaultProps = {
  isPublic: true,
};

export default MessageContainer;
