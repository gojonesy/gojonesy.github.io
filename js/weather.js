
// https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139
// https://fcc-weather-api.glitch.met/api/current?lat=39.826408099999995&lon=-89.6157473
var lat, lon;
var location, weather, condition;
$(document).ready(function() {

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                getWeather(lat,lon);
                console.log(lat, lon);
            });
        
        } else {
            console.log("geolocation is not supported by this browser");
        }
        //return latitude;  
  }
  getLocation();


  $('.get-quote').on('click', function(event) {
        event.preventDefault();
        console.log("Hello Toggle!");
        // Convert the text in # weather from Celsius to Fahrenheit
        var temp = $('#weather').text();
        console.log(temp);
        var tempArray = temp.split(' ');
        if (tempArray[1] === "C") {
            // We are at Celsius, Convert to Fahrenheit
            var tempTemp = tempArray[0] * 9;
            tempTemp /= 5;
            tempTemp += 32;
            console.log(tempTemp);
            $('#weather').text(tempTemp + ' F');
        } else {
            // We are at Fahrenheit, convert to Celsius
            var tempTemp = tempArray[0] -32;
            tempTemp *= 5;
            tempTemp /= 9;
            console.log(tempTemp);
            $('#weather').text(tempTemp + ' C');
        }
        //getNewQuote();
    });
});

function getWeather(lat, lon) {
        $.ajax({
            "url": 'https://fcc-weather-api.glitch.me/api/current',
            "type": 'GET',
            "data": {
                lat: lat, 
                lon: lon, 
            },
            success: function(result) {
                console.log("Yay!!");
                console.log(result);
                city = result.name;
                weather = result.main.temp;
                backPic = result.weather[0].icon;
                $('#city').text(city);
                $('#weather').text(weather + ' C');
                $('#condition').text(backPic);
                $('.condition').html("<img src='" + backPic + "'>");
            }
        })
    }