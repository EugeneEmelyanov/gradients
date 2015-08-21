/**
 * Created by eugene on 6/25/15.
 */
(function () {
	var app = angular.module("directives");

	app.directive('gradients.panel', function () {
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./directives/panel.template.html",
			scope: {
				"panelTitle": "@panelTitle"
			}
		}
	})
})();
