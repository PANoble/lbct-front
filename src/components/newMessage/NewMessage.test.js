import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NewMessageContainer from './NewMessageContainer';

const setup = () => {
  const props = {
    dispatch: jest.fn(),
  };
  Enzyme.configure({ adapter: new Adapter() });
  const enzymeWrapper = mount(<NewMessageContainer {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('NewMessageContainer', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('NewMessage').length).toBe(1);
  });
});
