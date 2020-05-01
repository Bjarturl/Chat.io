import React from 'react';
import { shallow } from 'enzyme';
import { Chatbox } from './index';

describe('Chatbox component tests', () => {
    let component;
    it('should test the message input', () => {
        component = shallow(<Chatbox />);
        
        component.find('input').first().simulate('change', { target: { value: "Hello there!" } });
        expect(component.find('input').prop('value')).toBe("Hello there!");
    });
});