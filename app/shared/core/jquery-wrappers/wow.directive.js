(function() {
	"use strict";

	angular
		.module("directives")
		.directive("wow", initWow);

		/*jshint latedef:false*/
	function initWow() {
		return {
			restrict: "A",
			link: function(scope, elem, attrs) {
				var wow = new WOW({
					mobile: false
				});
				wow.init();
			}
		};
	}
})();