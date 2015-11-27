var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/api/led', function (req, res) {
  console.log("led GET");
  res.write('{"color": "00FF00"}');
});

app.post('/api/led', function (req, res) {
  console.log("led POST");
});

app.get('/api/temperature', function (req, res) {
  res.render('{"temperature": "20.3"}');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
