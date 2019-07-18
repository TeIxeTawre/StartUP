jQuery(document).ready(function() {
	$('.client-carousel').owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: true,
		smartSpeed: 800,
	});
	$('.men').owlCarousel({
		nav: true,
		dots: false,
		responsive:{
	        0:{
	        	margin: 0,
				stagePadding: 0,
	            items:1
	        },
	        768:{
				margin: 40,
				stagePadding: 60,
	            items:2
	        },
	        990:{
				margin: 90,
	            items:3
	        },
	        1200:{
				margin: 40,
	            items:4
	        }
	    }
	});
	$('.humburger').on('click', function(event) {
		event.preventDefault();
		$('.top-nav').toggleClass('top-nav_active');
		// $('.works').toggleClass('d-none');
		// $('.blog').toggleClass('d-none');
		// $('.clients').toggleClass('d-none');
		// $('.contacts').toggleClass('d-none');
		// $('.about').toggleClass('d-none');
		// $('.services').toggleClass('d-none');
		// $('.footer').toggleClass('d-none');
	});
});


