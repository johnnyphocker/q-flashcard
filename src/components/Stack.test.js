import React from 'react';
import { shallow } from 'enzyme';

import { Stack } from './Stack';

let props = {
    stack: {
        id: 0,
        title: 'test title',
        cards: [{id: 0, prompt: 'test prompt', answer: 'test answer'}, {id: 1, prompt: 'test prompt 2', answer: 'test answer 2'}]
    }
}

describe('Stack', () => {
    let stack = shallow(<Stack {...props} />);

    it('renders the title', () => {
        expect(stack.find('h3').text()).toEqual(props.stack.title);
    });

    it('renders the link home', () => {
        expect(stack.find('Link h4').text()).toEqual('Home');
    });

    it('renders the correct number of cards', () => {
        expect(stack.find('Card').length).toEqual(props.stack.cards.length);
    });

});