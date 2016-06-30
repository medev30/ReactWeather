var React = require('react');

var WeatherMessage = ({temp, location, country}) => {
    return (
        <div>
            <p>It's {temp} in {location}, {country} </p>
        </div>
    );
}

module.exports = WeatherMessage;
