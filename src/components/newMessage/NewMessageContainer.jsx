import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../utils/avatar';
import { NewMessage } from './NewMessage.css';

const NewMessageContainer = (props) => {
  let input = '';

  return (
    <NewMessage
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          //a message will always be public at the moment
          props.dispatch(input.value, 'Me', '#fff', avatar, true);
          input.value = '';
        }
      }}
      type="text"
      placeholder="Type here"
      ref={(node) => {
        input = node;
      }}
    />
  );
};

NewMessageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default NewMessageContainer;
