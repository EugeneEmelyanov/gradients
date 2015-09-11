/**
 * Created by Yauhen_Yemelyanau on 6/30/2015.
 */
(function() {
	"use strict";

	angular
		.module("gradient-directives")
		.directive("gradients.stops", gradientsStops);

	/*jshint latedef:false*/
	function gradientsStops() {
		return {
			templateUrl: "./directives/gradients/stops.template.html"
		};
	}
})();