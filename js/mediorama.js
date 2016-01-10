if(Modernizr.touch) {
        alert('Witaj. Prace nad mobilną wersją strony wciąż trwają. Zapraszamy wkrótce!');
        window.location.href = "/temp/";
    }


$(document).ready(function() {

    "use strict";

    $(document).scroll(function () {
        if ($("body").height() <= ($(window).height() + $(window).scrollTop() + 600)) {
        $('.znik').css("z-index",1);
        } else {
        $('.znik').css("z-index",-2);
        }
    });

    $("#menu").load("menu.html");	

//animacja przejścia
    window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
    });

}); 
