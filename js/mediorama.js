$(document).ready(function() {
		  
		 "use strict";
           createFullpage();
	      
	   function createFullpage() {
        $('#fullpage').fullpage({
           anchors: ['intro', 'opis', 'projekty', 'kontakt'],
				menu: '#menu',
				scrollingSpeed: 1000,
				slidesNavigation: true,
				scrollOverflow: true
        });
}
		 
    var slides;
   	var v = false;  
	  
        $('img').click(function(){
			slides = $("#fullpage").detach();
		  $('#pro').load('portfolio.html');	  
	  $("body").css("overflow", "scroll");
	    v = true;
		});
    
	
	    $('.navbar').click(function(){
			if (v) { 
     $("#pro").empty(); 
	$("body").prepend(slides);
	$("body").css("overflow", "hidden");
	 }});
	
		  
}); 