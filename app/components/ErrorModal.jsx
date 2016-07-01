var React = require('react');
var PropTypes = React.PropTypes;

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'My Error'
        };
    },

    propTypes: {
        title: PropTypes.number,
        message: PropTypes.string.isRequired
    },

    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },

    render: function() {
        var {title, message} = this.props;
        return (
            <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className='button holow' data-close=''>
                        Okay
                    </button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;
