var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/api/led', function (req, res) {
  console.log("led GET");
  res.send('{"color": "00FF00"}');
});

app.post('/api/led', function (req, res) {
  console.log("led POST: " + req.body.color);
});

app.get('/api/temperature', function (req, res) {
  console.log("temperature GET")
  res.send('{"temperature": "20.3"}');
});

app.post('/api/beep', function (req, res) {
  console.log("beep POST: " + req.body.frequency);
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
