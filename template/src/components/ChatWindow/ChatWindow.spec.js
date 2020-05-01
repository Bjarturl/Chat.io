import React from 'react';
import { shallow } from 'enzyme';
import ChatWindow from './index';

describe('ChatWindow component tests', () => {
    let component;
    it('should find the main div', () => {
        component = shallow(<ChatWindow />);
        expect(component.find('div').prop('className')).toBe("chat-window");
    });
});