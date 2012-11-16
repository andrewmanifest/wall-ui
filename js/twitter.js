var Twitter = function(elId, options) {
    
    var defaults = {
        searchUrl: "http://search.twitter.com/search.json?q=404&src=typd",
        displayCount: 5,
        updateInterval: 10000
    };
	var options = $.extend(defaults, options);		

    var el = document.getElementById(elId);
    var searchURL = options.searchUrl;
    
    if(!el) console.error("No Element");
    
    var init = function(){
        getData();
    }(); 
    
   function getData(){
        $.ajax({
        	type:"GET",
        	url:searchURL,
        	dataType: "jsonp",
        	success: function(_data) {
        	   
            	//updateData(_data);
            	//console.log("search:", _data);
            	buildList(_data);
        	}
		});
    }
    
    function buildList(data){
        $('.tweet-list', el).empty();
        for(var i = 0; i<options.displayCount; i++){
            if(data.results[i]){
             var randIndex = Math.floor(Math.random()*data.results.length);
             addTweet(randIndex, data.results);
            }
        }
        
        
    }
    
    function addTweet(index, list) {
        var tweet = $("<li>", {'class':'tweet'});
        $(tweet).append($("<img>", {'src':list[index].profile_image_url}))
                .append($("<div>", {'class':'text'}).html(list[index].text));
        $('.tweet-list', el).append(tweet);
        //$('.text', tweet).fitText();
        $('.text', tweet).fitToHeight();
    }
    
    var intervalTimer = setInterval(getData, options.updateInterval);
}