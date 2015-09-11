(function() {

	"use strict";

	angular
		.module("gradient-directives")
		.directive("gradients.markup", gradientsMarkup);

	/*jshint latedef:false */
	function gradientsMarkup() {
		return {
			templateUrl: "./directives/gradients/markup.template.html"
		};
	}

})();