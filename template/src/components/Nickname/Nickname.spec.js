import React from 'react';
import { shallow } from 'enzyme';
import { Nickname } from './index';

describe('Nickname component tests', () => {
    let component;
    it('should find the main div', () => {
        component = shallow(<Nickname />);
        expect(component.find('div').first().prop('className')).toBe("nickname");
    });
});