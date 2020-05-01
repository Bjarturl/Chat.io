import React from 'react';
import { shallow } from 'enzyme';
import { User } from './index';

describe('User component tests', () => {
    let component;
    it('should find the main div', () => {
        component = shallow(<User ops={[]}/>);
        expect(component.find('div').first().prop('className')).not.toBe(null)
    });
});