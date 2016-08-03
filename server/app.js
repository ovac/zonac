var express = require('express');
var app = express();
var path = require('path');
// var db = require('./lib/db');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.urlencoded();

app.use(express.static(path.join(__dirname, "../public")));

app.use('/users', require('./users/users.route'));
app.use('/ussd', jsonParser, require('./ussd/ussd.route'));

app.use('*', function(req, res) {
  res.redirect(path.join('/#', req.originalUrl));
});

module.exports = app;
