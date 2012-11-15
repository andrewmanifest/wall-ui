var Twitter = function(elId, options) {
    
    var defaults = {};
	var options = $.extend(defaults, options);		

    var el = document.getElementById(elId);
    var searchURL = "http://search.twitter.com/search.json?q=%40manifestdigital%20OR%20from%3Amanifestdigital%20OR%20%23MDWall&src=typd";
    
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
            	console.log("search:", _data);
            	buildList(_data);
        	}
		});
    }
    
    function buildList(data){
        var tweetLength = 5
        for(var i = 0; i<tweetLength; i++){
            if(data.results[i]){
                var tweet = $("<li>", {'class':'tweet'});
                $(tweet).append($("<img>", {'src':data.results[i].profile_image_url}))
                        .append($("<div>", {'class':'text'}).html(data.results[i].text));
                $('.tweet-list', el).append(tweet);
            }
        }
    }
}