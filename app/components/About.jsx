var React = require('react');

var About = () => {
    return (
        <div>
            <h1 className='text-center page-title ss'>About</h1>
            <p>This is a weather application built on React</p>
            <p>Some tools used here</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - React Javascript Framework
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - API to search for weather by city name
                </li>
            </ul>
        </div>
    );
};
module.exports = About;
