/**
 * Created by eugene on 6/25/15.
 */

(function() {
	"use strict";

	angular
		.module("gradient-directives")
		.directive("gradients.options", GradientOptionsDirective);

	/*jshint latedef:false*/
	function GradientOptionsDirective() {
		return {
			restrict: "E",
			controllerAs: "vm",
			bindToController: true,
			controller: GradientOptionsDirectiveController,
			templateUrl: "./directives/gradients/options.template.html"
		};
	}

	/*@ngInject*/
	function GradientOptionsDirectiveController($scope) {

		var vm = this;
		var gradVM = $scope.gradVM;

		vm.linearGradientTypeChanged = function(item) {
			gradVM.gradient.linearGradientDirection = item;
		};

		vm.radialGradientPositionChange = function(item) {
			gradVM.gradient.radialGradientPosition = item;
		};

		vm.radialGradientSizeChange = function(item) {
			gradVM.gradient.radialGradientSize = item;
		};
	}
})();