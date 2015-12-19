$(document).ready(function() {
		  
		   "use strict";
	
		$("#menu").load("menu.html");	
		
	
	$("#powrot").click(function(){
	window.history.back();
	});
	
		
           createFullpage();
	      
	   function createFullpage() {
        $('#fullpage').fullpage({
           anchors: ['intro', 'opis', 'projekty', 'kontakt'],
			//	menu: '#menu',
				scrollingSpeed: 1000,
			    slidesNavigation: true,
			//	scrollOverflow: true
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
