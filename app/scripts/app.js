"use strict";

/**
 * @ngdoc overview
 * @name gradientsApp
 * @description
 * # gradientsApp
 *
 * Main module of the application.
 */
angular
	.module("gradientsApp", [
		"ngAnimate",
		"ngCookies",
		"ngResource",
		"ngRoute",
		"ngSanitize",
		"ngTouch",
		"directives",
		"services",
		"gradient-directives",
		"gradient-services"
	])
	.config(config);
/*@ngInject*/
function config($routeProvider) {
	$routeProvider
		.when("/gradient", {
			templateUrl: "views/gradients.html",
			controller: "gradients.GradientsCtrl",
			controllerAs: "gradVM",
			resolve: {
				gradientsData: gradientsData
			}
		})
		.when("/", {})
		.otherwise({
			redirectTo: "/gradient"
		});
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