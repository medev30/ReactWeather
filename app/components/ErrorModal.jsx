var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var PropTypes = React.PropTypes;

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error'
        };
    },

    propTypes: {
        title: PropTypes.string,
        message: PropTypes.string.isRequired
    },

    componentDidMount: function () {
        var {title, message} = this.props;
        var modalMarkup = (
            <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
                <h4>{title}</h4>
                <h5>{message}</h5>
                <p>
                    <button className='button holow' data-close=''>
                        Okay
                    </button>
                </p>
            </div>
        );

        // remove node if there is one left by Foundation
        $('.reveal-overlay').remove();

        // convert jsx to html string
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));

        // use jQuery to attach $modal to ReactDOM node
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },

    render: function() {
        return (
            <div/>
        )
    }
});

module.exports = ErrorModal;
