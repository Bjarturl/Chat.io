import React from 'react';
import { shallow } from 'enzyme';
import { RoomCreate } from './index';

describe('RoomCreate component tests', () => {
    let component;
    it('should find the main div', () => {
        component = shallow(<RoomCreate />);
        expect(component.find('div').first().prop('className')).not.toBe(null)
    });
});