import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MessagesListContainer from './MessagesListContainer';

const setup = () => {
  const props = {
    messages: [],
  };
  Enzyme.configure({ adapter: new Adapter() });
  const enzymeWrapper = mount(<MessagesListContainer {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('MessagesList', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('MessagesList').length).toBe(1);
  });
});
