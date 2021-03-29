import React from 'react';
import PropTypes from 'prop-types';
import { UserPic, UserName } from '../commons/';
import { SideBar, UsersList, User } from './SideBar.css';

const SidebarContainer = ({ users }) => {
  return (
    <SideBar>
      <UsersList>
        {users.map((user) => (
          <User key={user.id}>
            <UserPic src={user.userAvatar} />
            <UserName userColor={user.userColor}>{user.name}</UserName>
          </User>
        ))}
      </UsersList>
    </SideBar>
  );
};

SidebarContainer.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default SidebarContainer;
