$(document).ready(function() {
	(function($){
	  $.fn.wrapMatch = function(count, className) {
		var length = this.length;
		for(var i = 0; i < length ; i+=count) {
		  this.slice(i, i+count).wrapAll('<div '+((typeof className == 'string')?'class="'+className+'"':'')+'/>');	  
		}
		return this;
	  }; 
	})(jQuery);
	$('ul li').wrapMatch(4,'newclass');
	$( "ul li" ).each(function() {
		$(this).has('h3').addClass('h3').nextAll().has('h3').addClass("h3");
		if($(this).parent().hasClass('newclass')){
			$('.newclass').each(function() {
				if($(this).children('li').hasClass('h3')){
					$(this).children('li').addClass('textBottom');
				}
			});			
		}		
	});
	if ( $("ul li").parent().is( "div" ) ){
		$("ul li").unwrap();
	}
 }); 
