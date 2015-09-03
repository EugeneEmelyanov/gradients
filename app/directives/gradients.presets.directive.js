(function() {

	"use strict";

	angular.module("directives")
		.directive("gradients.presets", gradientsPresets);

	/*jshint latedef:false*/
	function gradientsPresets() {
		return {
			templateUrl: "./directives/gradient.presets.template.html"
		};
	}

})();