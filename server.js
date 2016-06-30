var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

//OpenWeatherMap middleware to redirect all traffic to http: not https:

app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Mead - React. Express server is running on 3000.');
});
