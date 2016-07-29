var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send('Hello Gammer');
});

app.listen(app.get('port'), function() {
  console.log('Listening on port %s', app.get('port'));
});
