import React from 'react';
import { shallow } from 'enzyme';
import  Rooms  from './index';

describe('Rooms component tests', () => {
    let component;
    it('should find the main div', () => {
        component = shallow(<Rooms />);
        expect(component.find('div').first().prop('className')).not.toBe(null)
    });
});