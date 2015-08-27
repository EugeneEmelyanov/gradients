/**
 * Created by eugene on 6/25/15.
 */
(function () {
	angular
			.module("directives")
			.directive('gradients.panel', function () {
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
