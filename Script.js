$(document).ready(function () {
    var appCache = window.applicationCache;

    if (appCache === 0) {
        $(".js1").text("UNCACHED");

    }
    else if (appCache === 1) {
        $(".js1").text("IDLE");

    }
    else if (appCache === 2) {
        $(".js1").text("CHECKING");

    }
    else if (appCache === 3) {
        $(".js1").text("DOWNLOADING");

    }
    else if (appCache === 4) {
        $(".js1").text("UPDATE READY");

    }
    else if (appCache === 4) {
        $(".js1").text("OBSOLETE");
    }
    
      
});

/*Geo Locator API*/
function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else {
            $(".position").html("Geolocation not supported.");
        }
        function showPosition(position) {
            var posLa = position.coords.latitude;
            var posLo = position.coords.longitude;
            var posLaLo=posLa+","+posLo;
           $(".position").html("Latitude:"+posLa+" "+"Longitude:"+posLo);
           var imageL="http://maps.googleapis.com/maps/api/staticmap?center="
    +posLaLo+"&zoom=14&size=400x300&sensor=false";
           $(".maps").html("<img src='" + imageL + "'>");
           }
        }


   