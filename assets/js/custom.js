(function($){

	"use strict"; 

/* ---------------------------------------------- /*
* Preloader
/* ---------------------------------------------- */


$('.Preloader').delay(1050).fadeOut('slow');

/* ---------------------------------------------- /*
* Animated scrolling / Scroll Up
/* ---------------------------------------------- */

$('a[href^="#"]').on("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
	}, 1000);
	e.preventDefault();
});

$('#scroll-up').on("click", function(e){
	e.preventDefault();
   $("html, body").animate({scrollTop: 0}, 1000);
});

$(window).on('scroll', function() {
	if ($(this).scrollTop() > 100) {
		$('.scroll-up').fadeIn();
	} else {
		$('.scroll-up').fadeOut();
	}
});

/* ---------------------------------------------- /*
* Initialize shuffle plugin
/* ---------------------------------------------- */

var $portfolioContainer = $('.list-items-container');

$('#filter li').on('click', function (e) {
	e.preventDefault();

	$('#filter li').removeClass('active');
	$(this).addClass('active');

	var group = $(this).attr('data-group');
	var groupName = $(this).attr('data-group');

	$portfolioContainer.shuffle('shuffle', groupName );
});

})(jQuery);