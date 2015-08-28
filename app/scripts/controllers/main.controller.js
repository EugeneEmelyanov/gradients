/**
 * Created by eugene on 8/18/15.
 */
"use strict";

(function () {

	angular
			.module("gradientsApp")
			.controller('gradients.MainController', MainController);

	function MainController($scope, $route, $location, CommonServices) {
		$scope.pageName = function () {
			return $location.path();
		}

		//$location.path("/gradient");
		showAngularStats();

		$scope.onSendMessage = function () {
			CommonServices.sendMessage($scope.message);
		}

		$scope.message = {};

		$scope.go = function (path, anc_id) {
			if (path === "/") {
				if ($location.path() !== path) {
					var listener = $scope.$root.$on("$locationChangeSuccess", function () {
						scrollToAcnhor();
						listener();
					});
				} else {
					scrollToAcnhor();
				}
			} else {
				anc_id = "#mainBodyContainer";
				scrollToAcnhor();
			}

			$location.path(path);

			function scrollToAcnhor() {
				$('html, body').stop().animate({
					scrollTop: $(anc_id).offset().top
				}, 1000);
			}
		}
	}
})();
