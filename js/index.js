 
 // tabbed content   
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* tab mode */
    $("ul.tabs li").click(function() {
		
	      $(".tab_content").hide();
	      var activeTab = $(this).attr("rel"); 
	      $("#"+activeTab).fadeIn();		
			
	      $("ul.tabs li").removeClass("active");
	      $(this).addClass("active");

		  $(".tab_drawer_heading").removeClass("d_active");
		  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");  
    });

	/* accordion mode */
	$(".tab_drawer_heading").click(function() {
      
	      $(".tab_content").hide();
	      var d_activeTab = $(this).attr("rel"); 
	      $("#"+d_activeTab).fadeIn();
		  
		  $(".tab_drawer_heading").removeClass("d_active");
	      $(this).addClass("d_active");
		  
		  $("ul.tabs li").removeClass("active");
		  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");

	/* plus - minus */
		  $(this).find('.arrow').each(function(){

			 if ($(this).text() !== '+') {
					$('.arrow').text('-');
					$(this).text('+');
				}
				if ($(this).text() !== '-') {
						$('.arrow').text('+');
						$(this).text('-');
				}
				else {
					$(this).text('+');
			 	}
		   });
	});
		
			
	
