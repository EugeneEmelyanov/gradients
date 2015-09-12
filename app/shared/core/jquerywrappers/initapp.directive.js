(function() {
	"use strict";

	/**
	 * Will contain all the jquery plugins initialization for now.
	 * TODO: refactor this to have plugin per directive.
	 */
	angular
		.module("core-directives")
		.directive("initApp", initApplication);

	/*jshint latedef:false*/
	function initApplication($window, $timeout, $log, $rootScope) {
		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */
		return {
			restrict: "A",
			link: function(scope, elem, attrs) {
				var e = $(elem);
				var w = $($window);
				$timeout(function() {
					resizeScreen();					
				});

				w.resize(function() {
					resizeScreen();
				});

				$rootScope.$on("$routeChangeSuccess", function() {
					resizeScreen();
				});

				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
					$('#home').css({
						'background-attachment': 'scroll'
					});
				} else {
					$('#home').parallax('50%', 0.1);
				}

				w.scroll(function() {
					if ($(this).scrollTop() > 100) {
						$(".scroll-up").fadeIn();
					} else {
						$(".scroll-up").fadeOut();
					}
				});


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

				function resizeScreen()	{
					$(".screen-height").height(w.height());
				}
			}
		};
	}
})();