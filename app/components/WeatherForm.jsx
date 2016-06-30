var React = require('react');

var WeatherForm = React.createClass({

    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },

    render: function() {

        return (
            <div className='row' >
                <form className='col-sm-6' onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                    <input className="form-control" ref='location' placeholder="Enter city name" />
                  </div>
                  <div>
                      <button
                          className="btn btn-default btn-block"> Get Weather </button>
                  </div>
              </form>
            </div>
        );
    }

});

module.exports = WeatherForm;
