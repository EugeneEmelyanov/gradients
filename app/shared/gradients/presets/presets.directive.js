(function() {

	"use strict";

	angular.module("gradient-directives")
		.directive("gradients.presets", gradientsPresets);

	/*jshint latedef:false*/
	function gradientsPresets() {
		return {
			templateUrl: "./directives/gradients/presets.template.html"
		};
	}

})();