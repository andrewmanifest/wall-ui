
$(document).ready(function(){
   
    var Clock = function(elId) {
        var el = document.getElementById(elId);
     
        if(el) {
            $(el).append($("<ul>", {'class': 'clock-group'}));
            $(".clock-group", el).append($("<li>", {'class': 'sec'})).append($("<li>", {'class': 'hour'})).append($("<li>", {'class': 'min'}))
             setInterval( function() {
              var seconds = new Date().getSeconds();
              var sdegree = seconds * 6;
              var srotate = "rotate(" + sdegree + "deg)";
              
              $(".sec", el).css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
              
            }, 1000 );
          
        
            setInterval( function() {
                var hours = new Date().getHours();
                var mins = new Date().getMinutes();
                var hdegree = hours * 30 + (mins / 2);
                var hrotate = "rotate(" + hdegree + "deg)";
                
                $(".hour", el).css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
              
            }, 1000 );
            
            
            setInterval( function() {
                var mins = new Date().getMinutes();
                var mdegree = mins * 6;
                var mrotate = "rotate(" + mdegree + "deg)";
                
                $(".min", el).css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
              
            }, 1000 );
        }       
       
    }
    
    var tileClock = new Clock("clock"); 
    var weather = new Weather("weather");
    var twitter = new Twitter("twitter", {updateInterval: 1000*10, displayCount: 1, searchUrl: "http://search.twitter.com/search.json?q=%40manifestdigital%20OR%20from%3Amanifestdigital&src=typd"});
    var wallMessage = new Twitter("wall-message", {updateInterval: 1000*60, displayCount: 1, searchUrl: "http://search.twitter.com/search.json?q=%23MDWall&src=typd"});
   
})
