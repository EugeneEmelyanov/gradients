/**
 * Created by Yauhen_Yemelyanau on 6/30/2015.
 */
(function() {
	"use strict";

	angular
		.module("directives")
		.directive("gradients.preview", gradientsPreview);

	/*jshint latedef:false*/
	function gradientsPreview() {
		return {
			templateUrl: "./directives/gradient.preview.template.html",
			restrict: "E"
		};
	}
})();