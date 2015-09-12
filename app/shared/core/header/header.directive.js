/**
 * Created by eugene on 6/24/15.
 */
(function() {

	"use strict";

	angular
		.module("core-directives")
		.directive("gradients.header", header);

	/*jshint latedef:false*/
	function header() {
		return {
			restrict: "E",
			replace: true,
			templateUrl: "./shared/core/header/header.template.html"
		};
	}
})();