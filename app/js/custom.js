(function($) {
	"use strict";
	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */


		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$(".scroll-up").fadeIn();
			} else {
				$(".scroll-up").fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		// $('.header').sticky({
		// 	topSpacing: 0
		// });

		$("body").scrollspy({
			target: '.navbar-custom',
			offset: 70
		});


		/* ---------------------------------------------- /*
		 * Skills
        /* ---------------------------------------------- */
		//var color = $('#home').css('backgroundColor');

		$('.skills').waypoint(function() {
			$('.chart').each(function() {
				$(this).easyPieChart({
					size: 140,
					animate: 2000,
					lineCap: 'butt',
					scaleColor: false,
					barColor: '#FF5252',
					trackColor: 'transparent',
					lineWidth: 10
				});
			});
		}, {
			offset: '80%'
		});


		/* ---------------------------------------------- /*
		 * Quote Rotator
		/* ---------------------------------------------- */


		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

	});

})(jQuery);