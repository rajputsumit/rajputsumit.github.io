var city = document.getElementById("city_name");
var weather = document.getElementById("weather_cond");
var temp_here = document.getElementById("temp_here");
var date = document.getElementById("map_date");
var icon = document.getElementById("wi_icon");

function getLocation() {
    if('geolocation' in navigator){
        // geolocation is supported :)
        requestLocation();
    } else { 
        // no geolocation :(
        alert("Sorry, looks like your browser doesn't support geolocation");
    }
}

function requestLocation() {
    
    var options = {
      // enableHighAccuracy = should the device take extra time or power to return a really accurate result, or should it give you the quick (but less accurate) answer?
      enableHighAccuracy: false,
      // timeout = how long does the device have, in milliseconds to return a result?
      timeout: 5000,
      // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
      maximumAge: 0
    };
  
    // call getCurrentPosition()
    navigator.geolocation.getCurrentPosition(success, error,options); 
  
    // upon success, execute following
    function success(pos) {
        
        var lat = pos.coords.latitude;
        var longi = pos.coords.longitude;

        var xhr = new XMLHttpRequest;
        
        xhr.open("GET","https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+longi+"&APPID=f49f3fabbbf7ab406081eded941f0281&units=metric"); 
        xhr.setRequestHeader('Content-Type', 'text/html');  
      xhr.send();
        xhr.onload = function () { 
            var data = JSON.parse(xhr.responseText);
            renderData(data);
        };
    }
    
    function error(err) {
        var msg = "Error: "+ err;
        console.log(msg);
    }
    
    function renderData(data) {
        var temp = data.main.temp;
        var temp_cel = temp;
        var current_time = new Date(new Date() + data.dt);
      
        city.innerHTML = data.name+", "+data.sys.country;
        temp_here.innerHTML = temp_cel+"&degC";
        weather.insertAdjacentHTML("beforeend","<br>"+data.weather[0].main);
        // date.innerHTML = current_time;
            
        if (current_time.getHours() >= 18 && current_time.getHours() < 6) {
            if(data.weather[0].main.toLowerCase() == "clouds") {
              icon.classList.add("wi-day-cloudy");
            } else {
              icon.classList.add("wi-day-"+data.weather[0].main.toLowerCase());
            }
        } else {
            if(data.weather[0].main.toLowerCase() == "clouds") {
              icon.classList.add("wi-night-cloudy");
            } else {
              icon.classList.add("wi-night-"+data.weather[0].main.toLowerCase());
            }
        }
    }
}
window.onload = getLocation();