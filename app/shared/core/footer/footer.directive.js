/**
 * Created by eugene on 6/24/15.
 */
(function() {
	"use strict";

	angular
		.module("core-directives")
		.directive("gradients.footer", footer);

	/*jshint latedef:false*/
	function footer() {
		return {
			restrict: "E",
			replace: true,
			templateUrl: "./shared/core/footer/footer.template.html"
		};
	}
})();