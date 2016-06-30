var axios = require('axios');

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a

const API_KEY = '79cb27880f8ca76868080ebd7c868859';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;



module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${ OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            // debugger;
            if (res.data.cod && res.data.message ) {
                throw new Error(res.data.message);
            } else {
                // return res.data.list[0].main.temp;
                return res.data;
                // return res.data.main.temp;
                // console.log('Log: ' + res.data.main.temp);
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }

};
