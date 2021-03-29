import styled from '@emotion/styled';

const SideBar = styled.aside`
  grid-area: sidebar;
  padding: 5px 0 0 5px;
  border-right: 1px solid #3f3f3f;
  height: 100%;
  background-color: #2f3136;
  font-size: 16px;
  list-style-type: none;
`;

const UsersList = styled.ul`
  list-style-type: none;
  margin: 12px 0;
  position: sticky;
  top: 0;
`;

const User = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

export { SideBar, UsersList, User };
