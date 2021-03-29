import messages from './messages';
import * as types from '../../constants/ActionTypes';

describe('Messages reducer', () => {
  it('should return the initial state, empty', () => {
    expect(messages(undefined, {})).toEqual([]);
  });

  it('should handle ADD_MESSAGE and store every message', () => {
    expect(
      messages([], {
        type: types.ADD_MESSAGE,
        author: 'Me',
        message: 'Hey',
        isPublic: true,
      })
    ).toEqual([
      {
        author: 'Me',
        message: 'Hey',
        isPublic: true,
      },
    ]);

    expect(
      messages(
        [
          {
            author: 'Me',
            message: 'Hey',
            isPublic: true,
          },
        ],
        {
          type: types.ADD_MESSAGE,
          author: 'Me again',
          message: 'Hey again',
          isPublic: true,
        }
      )
    ).toEqual([
      {
        author: 'Me',
        message: 'Hey',
        isPublic: true,
      },
      {
        author: 'Me again',
        message: 'Hey again',
        isPublic: true,
      },
    ]);
  });
});
