import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from './index';

describe('Sidebar component tests', () => {
    let component;
    it('should find the main div', () => {
        component = shallow(<Sidebar />);
        expect(component.find('div').first().prop('className')).not.toBe(null)
    });
});