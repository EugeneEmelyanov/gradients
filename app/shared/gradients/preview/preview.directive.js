/**
 * Created by Yauhen_Yemelyanau on 6/30/2015.
 */
(function() {
	"use strict";

	angular
		.module("gradient-directives")
		.directive("gradients.preview", gradientsPreview);

	/*jshint latedef:false*/
	function gradientsPreview() {
		return {
			templateUrl: "./directives/gradients/preview.template.html",
			restrict: "E"
		};
	}
})();