$(document).ready(function() {
		  
		   "use strict";
		
           createFullpage();
	      
	   function createFullpage() {
        $('#fullpage').fullpage({
           anchors: ['intro', 'opis', 'projekty', 'kontakt'],
				menu: '#menu',
				scrollingSpeed: 1000,
			    slidesNavigation: true,
			//	scrollOverflow: true
        });
}

		 
    var slides;
   	var v = false;  
	  
        $('img').click(function(){
		  slides = $("#fullpage").detach();
	      $("#projekt").load("portfolio2.html");	
    	  $.fn.fullpage.destroy('all');  
	      //   $("body").css("overflow", "scroll");
	          v = true; 
		});
    
	
	
	    $('.nav').click(function(){
			if (v) { 
              $("#projekt").empty(); 
			   // $.fn.fullpage.reBuild();
	         $("body").prepend(slides);		 
			// $("body").css("overflow", "hidden");
			  v = false;
			  createFullpage();
			}});
	
		  
}); 



				
				
