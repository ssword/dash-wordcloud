import React, { Component } from 'react';
import PropTypes from 'prop-types';
// requires wordcloud package
import WordCloud from 'wordcloud';

export default class Wordcloud extends Component {
    constructor(props) {
        super(props);
        this.width = 1250;
        this.height = 700;
    }

    componentDidMount() {
        var el = this.refs['my-canvas']

        var newCanvas = document.createElement('canvas');
        newCanvas.height = this.height;
        newCanvas.width = this.width;
        newCanvas.id = 'canvas';
        el.appendChild(newCanvas);
        this.newLabel(el);
        this.WC = new WordCloud(el.firstChild, this.props);
    }

    render() {
        return (
            <div ref="my-canvas">
          </div>
        );
    }

    newLabel(el) {
        var newDiv = document.createElement('div');
        var newSpan = document.createElement('span');
        newDiv.id = 'wcLabel';
        newSpan.id = 'wcSpan';
        el.appendChild(newDiv);
        document.getElementById('wcLabel').appendChild(newSpan);
    }

}



Wordcloud.propTypes = {
    // TODO: reconsider the PropTypes for each parameter.
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string,
    /**
     * List of words/text to paint on the canvas in a 2-d array, 
     * in the form of [word, size], e.g. [['foo', 12], ['bar', 6]].
     */
    list: PropTypes.any,
    /**
     * Font to use.
     */
    fontFamily: PropTypes.string,
    /**
     * font weight to use, can be, as an example, normal, bold or 600 or 
     * a callback(word, weight, fontSize specifies different font-weight 
     * for each item in the list.
     */
    fontWeight: PropTypes.string,
    /**
     * color of the text, can be any CSS color, or
     *  a callback(word, weight, fontSize, distance, theta) 
     * specifies different color for each item in the list. 
     * You may also specify colors with built-in keywords: 
     * random-dark and random-light. If this is a DOM cloud,
     *  color can also be null to disable hardcoding of 
     * color into span elements 
     * (allowing you to customize at the class level).
     */
    color: PropTypes.string,
    /**
     * minimum font size to draw on the canvas.
     */
    minSize: PropTypes.number,
    /**
     *function to call or number to multiply for size of each word in the list.
     */
    weightFactor: PropTypes.number,
    /**
     * paint the entire canvas with background color and 
     * consider it empty before start.
     */
    clearCanvas: PropTypes.bool,
    /**
     * color of the background.
     */
    backgroundColor: PropTypes.string,
    /**
     * size of the grid in pixels for marking the availability of the canvas —
     *  the larger the grid size, the bigger the gap between words.
     */
    gridSize: PropTypes.number,
    /**
     * set to true to allow word being draw partly outside of the canvas. 
     * Allow word bigger than the size of the canvas to be drawn.
     */
    drawOutOfBound: PropTypes.bool,
    /**
     *  origin of the "cloud" in [x, y].
     */
    origin: PropTypes.any,
    /**
     * visualize the grid by draw squares to mask the drawn areas.
     */
    drawMask: PropTypes.bool,
    /**
     * color of the mask squares.
     */
    maskColor: PropTypes.string,
    /**
     * width of the gaps between mask squares.
     */
    maskGapWidth: PropTypes.number,
    /**
     * Wait for x milliseconds before start drawn the next item 
     * using setTimeout.
     */
    wait: PropTypes.number,
    /**
     *  If the call with in the loop takes more than x milliseconds 
     * (and blocks the browser), abort immediately.
     */
    abortThreshold: PropTypes.number,
    /**
     * callback function to call when abort.
     */
    abort: PropTypes.func,
    /**
     * If the word should rotate, 
     * the minimum rotation (in rad) the text should rotate.
     */
    minRotation: PropTypes.number,
    /**
     *  If the word should rotate, 
     * the maximum rotation (in rad) the text should rotate. 
     * Set the two value equal to keep all text in one angle.
     */
    maxRotation: PropTypes.number,
    /**
     * Force the use of a defined number of angles. 
     * Set the value equal to 2 in a -90 degree/90 degree range means
     *  just -90, 0 or 90 will be used.
     */
    rotationSteps: PropTypes.number,
    /**
     * Shuffle the points to draw so the result will be 
     * different each time for the same list and settings.
     */
    shuffle: PropTypes.bool,
    /**
     * Probability for the word to rotate. 
     * Set the number to 1 to always rotate.
     */
    rotateRatio: PropTypes.number,
    /**
     * The shape of the "cloud" to draw. 
     * Can be any polar equation represented as a callback function,
     *  or a keyword present. 
     * Available presents are circle (default), 
     * cardioid (apple or heart shape curve, 
     * the most known polar equation), diamond, square,
     *  triangle-forward, triangle, 
     * (alias of triangle-upright, pentagon, and star.
     */
    shape: PropTypes.string,
    /**
     * degree of "flatness" of the shape wordcloud2.js should draw.
     */
    ellipticity: PropTypes.number,
    /**
     *for DOM clouds, allows the user to define the class of the span elements.
     * Can be a normal class string, applying the same class to every span or
     * a callback(word, weight, fontSize, distance, theta) for per-span class
     *  definition. 
     * In canvas clouds or if equals null, this option has no effect.
     */
    classes: PropTypes.any,
    /**
     * callback to call when the cursor enters or 
     * leaves a region occupied by a word.
     *  The callback will take arguments callback(item, dimension, event),
     *  where event is the original mousemove event.
     */
    hover: PropTypes.func,
    /**
     * callback to call when the user clicks on a word.
     *  The callback will take arguments callback(item, dimension, event),
     *  where event is the original click event.
     */
    click: PropTypes.func
};

Wordcloud.defaultProps = {
    list: [
        ['Les Misérables', 30], ['Victor Hugo', 20], ['Jean Valjean', 15],
        ['Javert', 15], ['Fantine', 15], ['Cosette', 15],
        ['Éponine', 12], ['Marius', 12], ['Enjolras', 12],
        ['Thénardiers', 10], ['Gavroche', 10], ['Bishop Myriel', 10],
        ['Patron-Minette', 10], ['God', 10], ['ABC Café', 10],
        ['paris', 8], ['Digne', 8], ['Elephant of the Bastille', 8],
        ['silverware', 5], ['Bagne of Toulon', 5], ['loaf of bread', 5],
        ['Rue Plumet', 5], ['revolution', 5], ['barricade', 5],
        ['sewers', 4], ['Fex urbis lex orbis', 4]
    ],
    minSize: 0,
    gridSize: 0,
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    color: 'random-dark',
    backgroundColor: 'white',
    minRotation: -Math.PI/4,
    maxRotation: Math.PI/4,
    shuffle: true,
    rotateRatio: 0.4,
    shape: 'circle',
    ellipticity: 0.65,
    hover: function(item, dimension, event) {
        var el = document.getElementById('wcLabel');
        if (!item) {
          el.setAttribute('hidden', true);
      
          return;
        }
      
        el.removeAttribute('hidden');
      
        el.style.left = dimension.x + event.srcElement.offsetLeft + 'px';
        el.style.top = dimension.y + event.srcElement.offsetTop + 'px';
        el.style.width = dimension.w + 'px';
        el.style.height = dimension.h + 'px';
      
        this.hoverDimension = dimension;
      
        document.getElementById('wcSpan').setAttribute(
          'data-l10n-args', JSON.stringify({ word: item[0], count: item[1] }));
        document.getElementById('wcSpan').innerHTML =item[0]+':' + item[1];
      
      },

    click: function(item) {
        alert(item[0] + ': ' + item[1]);
      }
}