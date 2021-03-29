import { connect } from 'react-redux';
import SideBarContainer from '../sideBar/SideBarContainer';

export const Sidebar = connect((state) => {
  return {
    users: state.users,
  };
}, {})(SideBarContainer);
