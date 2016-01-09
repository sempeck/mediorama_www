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

    createFullpage();

    function createFullpage() {
        $('#fullpage').fullpage({
        anchors: ['opis', 'projekty', 'kontakt'],
        //	menu: '#menu',
        scrollingSpeed: 1000,
        slidesNavigation: true,
        scrollOverflow: true,
        animateAnchor: false
        });
    }

//animacja przejścia
    window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
    });

}); 
