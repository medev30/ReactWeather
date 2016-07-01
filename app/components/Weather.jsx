var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },

    onSearch: function(location) {
        var self = this;
        // debugger;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            country: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then((data) => {
            self.setState({
                country: data.sys.country,
                location: data.name,
                temp: data.main.temp,
                isLoading: false
            });
        }, function(e) {
            self.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },

    componentDidMount: function() {
        // getting query string from react-router
        var location = this.props.location.query.location;

        if (location && location.length >0) {
            this.onSearch(location);
            window.location.hash = '#/';
        }
    },
    
    // called when component's props are updated
    componentWillReceiveProps: function (newProps) {
        var location = newProps.location.query.location;

        if (location && location.length >0) {
            this.onSearch(location);
            window.location.hash = '#/';
        }
    },

    render: function() {
        var {isLoading, errorMessage, location, country, temp} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className='text-center'>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} country={country} />;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return <ErrorModal message={errorMessage}/>;
            }
        }

        return (
            <div>
                <h1 className='text-center page-title'>Get Weather </h1>
                <WeatherForm onSearch={this.onSearch}/>
                { renderMessage() }
                { renderError() }
            </div>
        );
    }

});

module.exports = Weather;
