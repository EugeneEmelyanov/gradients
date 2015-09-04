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
		"gradient-directives"
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
	function gradientsData($q, stylesService) {
		return $q.all([stylesService.getGradientStyles(),
			stylesService.getLinearGradientDirections(),
			stylesService.getRadialGradientPositions(),
			stylesService.getRadialGradientSizes(),
			stylesService.getGradientPresets()
		]);
	}
}