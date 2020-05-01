import React from 'react';
import { shallow } from 'enzyme';
import { MessageWindow } from './index';

describe('MessageWindow component tests', () => {
    let component;
    it('should display the title correctly based on room', () => {
        component = shallow(<MessageWindow room="testRoom" />);
        expect(component.text().includes("You are in room: testRoom")).toBe(true);
    });
});