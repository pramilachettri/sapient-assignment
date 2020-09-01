import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Pagination from '../pagination/Pagination';

Enzyme.configure({adapter: new EnzymeAdapter()});

describe('Pagination Component unit test', () => {
  
  it('Should render pagination component', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.exists()).toBe(true);
  })
});
