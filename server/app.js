var express = require('express');
var app = express();
var path = require('path');
// var db = require('./lib/db');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.urlencoded();

function supportCrossOriginScript(req, res, next) {
  res.status(200);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  res.header("Access-Control-Allow-Headers", "Origin");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT, HEAD");
  res.header("Access-Control-Max-Age", "1728000");
  next();
}

app.use(express.static(path.join(__dirname, "../public")));

app.use(supportCrossOriginScript);
app.use('/users', require('./users/users.route'));
app.use('/ussd', jsonParser, require('./ussd/ussd.route'));

app.use('*', function(req, res) {
  res.redirect(path.join('/#', req.originalUrl));
});

module.exports = app;
