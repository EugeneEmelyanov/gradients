(function() {
	"use strict";

	angular
		.module("directives")
		.directive("initApp", initApplication);

	/*jshint latedef:false*/
	function initApplication($window, $timeout) {
		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */
		return {
			restrict: "A",
			link: function(scope, elem, attrs) {
				var e = $(elem);
				var home = $("#home");
				var w = $($window);
				$timeout(function() {
					$(".screen-height").height(w.height());
				});
				w.resize(function() {
					$(".screen-height").height(w.height());
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