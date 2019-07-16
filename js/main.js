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
	        	margin: 40,
				stagePadding: 20,
				center: true,
	            items:1
	        },
			480:{
	        	margin: 40,
				stagePadding: 100,
	            items:1
	        },
	        520:{
	        	margin: 60,
				stagePadding: 140,
	            items:1
	        },
	        580:{
	        	margin: 50,
				stagePadding: 120,
	            items:1
	        },
	        780:{
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
});