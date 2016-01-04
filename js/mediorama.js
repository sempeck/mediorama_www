$(document).ready(function() {
		
		   "use strict";
	
	$(document).scroll(function () {
    if ($("body").height() <= ($(window).height() + $(window).scrollTop() + 600)) {
        $('.znik').show();
    } else {
        $('.znik').hide();
    }
});
	
	$("#menu").load("menu.html");	
		
	
	$("#powrot").click(function(){
	window.history.back();
	});
	
		
           createFullpage();
	      
	   function createFullpage() {
        $('#fullpage').fullpage({
           anchors: ['opis', 'projekty', 'kontakt'],
			//	menu: '#menu',
				scrollingSpeed: 1000,
			    slidesNavigation: true,
			    //scrollOverflow: true
        });
}

//animacja przejścia
     window.addEventListener("beforeunload", function () {
     document.body.classList.add("animate-out");
});


 

	
// guzik powrotu	
//	$(window).scroll(function () { 
//   if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
//	 $(".powrot").css("display", "block");
//   }
//});

	  
}); 
