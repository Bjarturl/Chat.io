import React from 'react';
import { shallow } from 'enzyme';
import { Room } from './index';

describe('Room component tests', () => {
    let component;
    it('should find the main div', () => {
        component = shallow(<Room />);
        expect(component.find('div').first().prop('className')).not.toBe(null)
    });
});