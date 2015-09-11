/**
 * Created by eugene on 6/25/15.
 */
(function() {

	"use strict";

	angular
		.module("directives")
		.directive("gradients.panel", gradientsPanel);

	/*jshint latedef:false*/
	function gradientsPanel() {
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./directives/panel.template.html",
			scope: {
				"panelTitle": "@panelTitle"
			}
		};
	}
})();