var childrenWork = $('.works .container .row .col-9').length;
var secCol = $('section').length;

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
	});
	$('.top-nav_menu li').on('click', function(event) {
		$('.top-nav').toggleClass('top-nav_active');
	});

	for (var i = 4; i <= childrenWork; i++) {
		$('.works .container .row .col-9:nth-child('+ i +')').addClass('d-none d-lg-block');
	}

	$('.top-nav_menu li a[href*="#"]').on('click', function(e) {
	  e.preventDefault();

	  $('html, body').animate(
	    {
	      scrollTop: $($(this).attr('href')).offset().top + 100
	    }, 1000); 
	});

	$('.scroll-top[href*="#"]').on('click', function(e) {
	  e.preventDefault();

	  $('html, body').animate(
	    {
	      scrollTop: $($(this).attr('href')).offset().top
	    }, 1000);
	});
			
	$('.top-nav_menu li:first-child a').addClass('menu_active');
	console.log($('body').children().eq(1));
	$(window).scroll(function() {
		if($(this).scrollTop() > $('#services').offset().top - 200){
			$('.scroll-top').fadeIn();
			$('.scroll-top').css('display','flex');
		} else {
			$('.scroll-top').fadeOut();
		}
		for (var i = 0; i <= secCol; i++) {
			if($(this).scrollTop() > $('body').children().eq(i).offset().top){
				$('.menu_active').removeClass('menu_active');
				$('.top-nav_menu').children().eq(i).find('a').addClass('menu_active');
			}
		}
		
	});

	$('.works-menu li a').on('click', function(event) {
		event.preventDefault();
		$('.works-menu__active').removeClass('works-menu__active');
		$(this).addClass('works-menu__active')
	});
});