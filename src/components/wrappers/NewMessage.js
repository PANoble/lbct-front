import { connect } from 'react-redux';
import NewMessageContainer from '../newMessage/NewMessageContainer';
import { addMessage } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  dispatch: (message, author, authorColor, authorAvatar, isPublic) => {
    dispatch(addMessage(message, author, authorColor, authorAvatar, isPublic));
  },
});

export const NewMessage = connect(() => ({}), mapDispatchToProps)(NewMessageContainer);
