var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Mead - React. Express server is running on 3000.');
});
