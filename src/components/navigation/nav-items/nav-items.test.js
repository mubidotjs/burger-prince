import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavItems from './nav-items.component'
import NavItem from '../nav-item/nav-item.component'

configure({adapter: new Adapter()});

describe('<NavItems />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavItems />);
    })

    it("should render two <NavItems /> elements if not authenticated", () => {
        expect(wrapper.find(NavItem)).toHaveLength(2);
    });

    it("should render three <NavItems /> elements if authenticated", () => {
        wrapper.setProps({ isAuthenticated: true })
        expect(wrapper.find(NavItem)).toHaveLength(3);
    });

    it("should render an exact logout button if authenticated", () => {
        wrapper.setProps({ isAuthenticated: true })
        expect(wrapper.contains(<NavItem link="/logout">Logout</NavItem>)).toEqual(true);
    });
});
