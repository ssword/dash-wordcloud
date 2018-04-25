import React, {Component} from 'react';
import {wordcloud} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <wordcloud color="random-light" backgroundColor="black" />
            </div>
        );
    }
}

export default Demo;
