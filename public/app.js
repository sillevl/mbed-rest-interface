
var getTemperature = function(){
  $.ajax({
    url: "/api/temperature",
    success: function(data) {
      var result = JSON.parse(data);
      $('div.temperature').html(result.temperature + ' °C');
    }
  });
};

var getLed = function(){
  $.ajax({
    url: "/api/led",
    success: function(data) {
      var result = JSON.parse(data);
      $('div.ledcolor').html('#' + result.color);
    }
  });
};

var setLed = function(color){
  $.ajax({
    url: "/api/led",
    method: "post",
    contentType: 'application/json',
    data: '{"color": "' + color + '"}'
  });
};

getLed();
setInterval(getTemperature, 1000);
$('#ledbutton').click(function(){
  var color = $('input[name=ledcolor]').val();
  setLed(color);
});
