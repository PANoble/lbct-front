import { connect } from 'react-redux';
import MessagesListContainer from '../messagesList/MessagesListContainer';

export const MessagesList = connect(
  (state) => ({
    messages: state.messages,
  }),
  {}
)(MessagesListContainer);
