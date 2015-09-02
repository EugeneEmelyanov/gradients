/**
 * Created by Yauhen_Yemelyanau on 6/30/2015.
 */
(function() {
	"use strict";

	angular
		.module("directives")
		.directive("gradients.stops", gradientsStops);

	/*jshint latedef:false*/
	function gradientsStops() {
		return {
			templateUrl: "./directives/gradient.stops.template.html",
			compile: compile
		};
	}

	function compile(tElement, attrs, transclude) {
		return {
			post: function postLink(scope, elem, attrs) {
				console.log("postlink");
			}
		};
	}
})();