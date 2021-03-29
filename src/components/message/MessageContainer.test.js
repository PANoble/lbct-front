import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MessageContainer from './MessageContainer';

const setup = () => {
  const props = {
    author: 'Tony',
    message: 'Yeah',
    isPublic: true,
  };
  Enzyme.configure({ adapter: new Adapter() });
  const enzymeWrapper = mount(<MessageContainer {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('Message', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('span').at(1).html()).toBe('<span>Yeah</span>');
  });
});
