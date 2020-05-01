import React from 'react';
import { shallow } from 'enzyme';
import { UserOperations } from './index';

describe('UserOperations component tests', () => {
    let component;
    it('should find the main div', () => {
        component = shallow(<UserOperations />);
        expect(component.find('select').first().prop('id')).not.toBe(null)
    });
});