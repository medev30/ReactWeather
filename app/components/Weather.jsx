var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
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

        this.setState({ isLoading: true });

        openWeatherMap.getTemp(location).then((data) => {
            self.setState({
                country: data.sys.country,
                location: data.name,
                temp: data.main.temp,

                // location: location,
                // temp: temp,
                isLoading: false
            });
        }, function(err) {
            self.setState({ isLoading: false });
            alert(err);
        });
    },

    render: function() {
        var {isLoading, location, country, temp} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h4>Fetching weather...</h4>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} country={country} />;
            }
        }

        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm onSearch={this.onSearch}/>
                { renderMessage() }
            </div>
        );
    }

});

module.exports = Weather;
