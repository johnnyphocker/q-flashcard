import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
    let app = shallow(<App />);

    it('renders the flashcard pro title', () => {
        expect(app.find('h2').text()).toEqual('Flashcard PRO');
    });

    it('renders the Stacklist', () => {
        expect(app.find('Connect(StackList)').exists()).toBe(true);
    });

    it('renders a link to create new stacks', () => {
        expect(app.find('Link h4').text()).toEqual('Create a new stack');
    });

    
});