import React from 'react';
import { mount } from 'enzyme';
import Message from './index';

describe('Message component tests', () => {
    let component;
    it('should accept message as props', () => {
        component = mount(<Message message="Hello" nick="Tester"/>);
        expect(component.props().message).not.toBeNull(); 
    });
});