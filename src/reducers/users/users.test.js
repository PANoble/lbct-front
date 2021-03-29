import users from './users';
import * as types from '../../constants/ActionTypes';

describe('Users reducer', () => {
  it('should return the initial state, empty', () => {
    expect(users(undefined, {})).toEqual([]);
  });

  it('should handle ADD_USER and store every user', () => {
    expect(
      users([], {
        type: types.ADD_USER,
        name: 'Johny',
      })
    ).toEqual([
      {
        name: 'Johny',
      },
    ]);

    expect(
      users(
        [
          {
            name: 'Jackson',
          },
        ],
        {
          type: types.ADD_USER,
          name: 'Bryan',
        }
      )
    ).toEqual([
      {
        name: 'Jackson',
      },
      {
        name: 'Bryan',
      },
    ]);
  });
});
