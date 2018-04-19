import React from 'react';
import {shallow} from 'enzyme';
import wordcloud from '../wordcloud.react';

describe('wordcloud', () => {

    it('renders', () => {
        const component = shallow(<wordcloud />);
        expect(component).to.be.ok;
    });
});