(function() {
	"use strict";

	angular
		.module("app")
		.config(config);

	/*@ngInject*/
	function config($routeProvider) {
		$routeProvider
			.when("/nav-gradient", {
				templateUrl: "views/gradients.html",
				controller: "gradients.GradientsCtrl",
				controllerAs: "gradVM",
				resolve: {
					gradientsData: gradientsData
				}
			})
			.when("/", {})
			.when("/home", {})
			.when("/services", {});
		/*@ngInject*/
		function gradientsData($q, gradientDataService) {
			return $q.all([gradientDataService.getGradientStyles(),
				gradientDataService.getLinearGradientDirections(),
				gradientDataService.getRadialGradientPositions(),
				gradientDataService.getRadialGradientSizes(),
				gradientDataService.getGradientPresets()
			]);
		}
	}
})();