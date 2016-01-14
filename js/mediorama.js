$("#menu").load("menu.html");	
 
$(document).ready(function() {

        "use strict";
        
    function resize() {
              
     if (window.location.pathname !== '/') {  
        var heights = window.innerHeight;
        document.getElementById("par-window").style.height = heights -95 + "px";
        document.getElementById("par-window2").style.height = heights -95 + "px";
        }
    }

    resize();
    window.onresize = function() {
        resize();
        };

    //animacja przejścia
    window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
    });

}); 
