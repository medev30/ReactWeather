var React = require('react');

var WeatherMessage = ({temp, location, country}) => {
    return (
        <div>
            <h3>It's {temp} in {location}, {country} </h3>
        </div>
    );
}

module.exports = WeatherMessage;
