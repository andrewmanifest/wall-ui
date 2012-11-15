var Weather = function(elId){

    var el = document.getElementById(elId);
    
    //991718599967e222
    
    var forecastURL = "http://api.wunderground.com/api/991718599967e222/geolookup/conditions/q/IL/Chicago.json";
    var code = 0;
    var data, logData;
    
    
      
    var getData = function(){
        $.ajax({
        	type:"GET",
        	url:forecastURL,
        	dataType: "jsonp",
        	success: function(_data) {
            	updateData(_data);
        	}
		});
    }
    
	var updateData = function(_data){
    	data = _data;
    	if(!logData) console.log("forecast:", data );
    	logData = true;
    	$('.timestamp', el).empty().text(new Date());
    	$('.icon img', el).attr('src', getIconImage(data.current_observation.icon));
    	$('.temp', el).empty().html(String(data.current_observation.temp_f).split(".")[0]+"º");
    	if(data.current_observation.wind_mph > 10){
        	$('.wind', el).show() 
    	} else { 
    	   $('.wind', el).hide(); 
        }
	}
	
	var getIconImage = function(code){
        var path = 'img/weather-sunny.png';
    	switch(code){
        	case 'chanceflurries':
        	case 'chancerain':
        	case 'chancesleet':
        	case 'chancesnow':
        	case 'chancetstorms':
        	   path = 'img/weather-umbrella.png';
        	   break;
        	case 'clear':
        	case 'mostlysunny':
        	case 'sunny':
        	   path = 'img/weather-sunny.png';
        	   break;
        	case 'cloudy':
        	   path = 'img/weather-cloudy.png';
        	   break;
    	   case 'flurries':
    	   case 'snow':
        	   path = 'img/weather-snow.png';
        	   break;
            case 'fog':
            case 'hazy':
        	   path = 'img/weather-fog.png';
        	   break;
            case 'mostlycloudy':
            case 'partlycloudy':
            case 'partlysunny':
        	   path = 'img/weather-partlycloudy.png';
        	   break;
            case 'sleet':
        	   path = 'img/weather-hail.png';
        	   break;
            case 'rain':
        	   path = 'img/weather-rain.png';
        	   break;
    	   case 'tstorms':
    	   case 'unknown':
        	   path = 'img/weather-lightning.png';
        	   break;
        	
    	}
    	
    	return path;
	}
	
	// Setup
	if(el) getData();
	var dataTimer = setInterval(getData, 1000 * 60 * 5);
	$('.wind', el).hide();
}