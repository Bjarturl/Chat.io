import React from 'react';
import { shallow } from 'enzyme';
import { Users } from './index';

describe('Users component tests', () => {
    let component;
    it('should find the main div', () => {
        component = shallow(<Users />);
        expect(component.find('div').first().prop('className')).not.toBe(null)
    });
});