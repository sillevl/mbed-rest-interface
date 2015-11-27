
var getTemperature = function(){
  $.ajax({
    url: "/api/temperature",
    success: function(data) {
      var result = JSON.parse(data);
      $('div.temperature').html(result.temperature + ' °C');
    }
  });
};

setInterval(getTemperature, 1000);
