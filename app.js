var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var coap = require('coap');

var options = {
  hostname: '10.182.33.106'
}

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/api/led', function (req, res) {
  options.method = 'GET';
  options.pathname = '/led';
  var request = coap.request(options)
  request.on('response', function(response) {
    res.send(response.payload.toString());
  })
  request.end()
});

app.post('/api/led', function (req, res) {
  options.method = 'POST';
  options.pathname = '/led';
  var request = coap.request(options)
  request.end(req.body.color)
});

app.get('/api/temperature', function (req, res) {
  options.method = 'GET';
  options.pathname = '/temperature';
  var request = coap.request(options)
  request.on('response', function(response) {
    var data = {temperature: response.payload.toString()}
    res.send(JSON.stringify(data));
  })
  request.end()
});

app.post('/api/beep', function (req, res) {
  options.method = 'POST';
  options.pathname = '/beep';
  var request = coap.request(options)
  request.end(req.body.frequency)
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
