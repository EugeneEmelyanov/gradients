(function() {
	"use strict";

	angular
		.module("directives")
		.directive("initApp", initApplication);

	/*jshint latedef:false*/
	function initApplication($window) {
		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */
		return {
			restrict: "A",
			link: function(scope, elem, attrs) {
				var e = $(elem);
				$(".screen-height").height($window.height());
				$window.resize(function() {
					$(".screen-height").height($(window).height());
				});

				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
					$('#home').css({
						'background-attachment': 'scroll'
					});
				} else {
					$('#home').parallax('50%', 0.1);
				}
			}
		};
	}
})();