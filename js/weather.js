var Weather = function(elId){

    var el = document.getElementById(elId);
    
    //991718599967e222
    
    var forecastURL = "http://api.wunderground.com/api/991718599967e222/geolookup/conditions/q/IL/Chicago.json";
    var code = 0;
    var data;
    
    if(el){
        $.ajax({
		type:"GET",
		url:forecastURL,
		dataType: "jsonp",
		success: function(_data){
			data = _data;
			init();
		}
		});
    }
    
	var init = function(){
    	console.log("forecast:", data);
    	$('.temp', el).empty().html(String(data.current_observation.temp_f).split(".")[0]+"º");
	}
}