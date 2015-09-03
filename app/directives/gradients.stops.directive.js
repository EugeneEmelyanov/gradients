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
			templateUrl: "./directives/gradient.stops.template.html"
		};
	}
})();