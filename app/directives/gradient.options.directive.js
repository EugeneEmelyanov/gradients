/**
 * Created by eugene on 6/25/15.
 */

(function () {
	angular
			.module("directives")
			.directive("gradients.options", gradientOptions);

	function gradientOptions() {
		return {
			restrict: "E",
			controller: function ($scope) {
				$scope.linearGradientTypeChanged = function (item) {
					$scope.gradient.linearGradientDirection = item;
				}
				$scope.radialGradientPositionChange = function (item) {
					$scope.gradient.radialGradientPosition = item;
				}
				$scope.radialGradientSizeChange = function (item) {
					$scope.gradient.radialGradientSize = item;
				}
			},
			templateUrl: "./directives/gradient.options.template.html"
		}
	};
})();
