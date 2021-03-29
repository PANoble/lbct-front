const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
    case 'MESSAGE_RECEIVED':
      return state.concat([
        {
          id: action.id,
          author: action.author,
          authorColor: action.authorColor,
          authorAvatar: action.authorAvatar,
          message: action.message,
          isPublic: action.isPublic,
        },
      ]);
    default:
      return state;
  }
};

export default messages;
