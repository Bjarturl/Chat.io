import React from 'react';
import { shallow } from 'enzyme';
import { Container } from './index';

describe('Container component tests', () => {
    let component;
    it('should test if correct number of children exist', () => {
        component = shallow(<Container />);
        expect(component.props().children.length).toBe(2);
    });
});