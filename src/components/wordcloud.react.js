import React, { Component} from 'react';
import PropTypes from 'prop-types';

import WordCloud from 'wordcloud';

export default class wordcloud extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        WordCloud(this.refs['my-canvas'],
        {
            list: [
                ['foo', 12],
                ['bar', 6]
            ],
            weightFactor: 5,
            fontFamily: 'Times, serif',
            color: function (word, weight) {
                return (weight === 12) ? '#f02222' : '#c09292';
            },
            rotateRatio: 0.5,
            rotationSteps: 2,
            backgroundColor: '#ffe0e0'
        });
    }

    render() {
        return (
            <div>
            <h2>Let magic happen {'\u2728'}</h2>
            <canvas ref="my-canvas">
            </canvas>
          </div>
        );
    }

}

wordcloud.propTypes = {
    id: PropTypes.string
};