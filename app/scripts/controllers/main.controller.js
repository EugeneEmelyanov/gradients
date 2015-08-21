/**
 * Created by eugene on 8/18/15.
 */
(function () {

	var app = angular.module("gradientsApp");

	app.controller('gradients.MainController', function ($scope, $route, $location) {
		$scope.pageName = function () {
			return $location.path();
		}

		//$location.path("/gradient");
		showAngularStats();

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
	});
})();
