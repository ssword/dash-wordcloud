import React, {Component} from 'react';
import {Wordcloud} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        // TDDO: this demo needs to be updated.
        return (
            <div>
                <Wordcloud 
                 color="random-light"
                 weightFactor="5"
                 backgroundColor="black" />
            </div>
        );
    }
}

export default Demo;
