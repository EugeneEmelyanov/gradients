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
			controllerAs: "vm",
			bindToController: true,
			controller: controller,
			templateUrl: "./directives/gradient.options.template.html"
		}
	}

	function controller($scope) {

		var vm = this;
		var gradVM = $scope.gradVM;

		vm.linearGradientTypeChanged = function (item) {
			gradVM.gradient.linearGradientDirection = item;
		}
		vm.radialGradientPositionChange = function (item) {
			gradVM.gradient.radialGradientPosition = item;
		}
		vm.radialGradientSizeChange = function (item) {
			gradVM.gradient.radialGradientSize = item;
		}
	}
})();
