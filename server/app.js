var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, "../public")));

app.use('/users', require('./users/users.route'));

module.exports = app;
