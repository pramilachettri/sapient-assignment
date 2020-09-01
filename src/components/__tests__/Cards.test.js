import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Cards from '../cards/Cards';

Enzyme.configure({adapter: new EnzymeAdapter()});

describe('Cards Component unit test', () => {
  
  it('Should render cards Component', () => {
    const wrapper = shallow(<Cards />);
    expect(wrapper.exists()).toBe(true);
  })
});
