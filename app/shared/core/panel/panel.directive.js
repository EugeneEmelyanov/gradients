/**
 * Created by eugene on 6/25/15.
 */
(function() {

	"use strict";

	angular
		.module("core-directives")
		.directive("gradients.panel", gradientsPanel);

	/*jshint latedef:false*/
	function gradientsPanel() {
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./shared/core/panel/panel.template.html",
			scope: {
				"panelTitle": "@panelTitle"
			}
		};
	}
})();