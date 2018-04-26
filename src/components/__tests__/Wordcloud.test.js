import React from 'react';
import {shallow} from 'enzyme';
import Wordcloud from '../Wordcloud.react';

describe('Wordcloud', () => {

    it('renders', () => {
        const component = shallow(<Wordcloud />);
        expect(component).to.be.ok;
    });
});
