import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import SideNavBar from '../sidenav/SideNavBar';

Enzyme.configure({adapter: new EnzymeAdapter()});

describe('SideNavBar Component unit test', () => {
  
  it('Should render SideNavBar component', () => {
    const wrapper = shallow(<SideNavBar />);
    expect(wrapper.exists()).toBe(true);
  })
});
