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
		"directives"
	])
	.config(config);

function config($routeProvider) {
	$routeProvider
		.when("/gradient", {
			templateUrl: "views/gradients.html",
			controller: "gradients.GradientsCtrl",
			controllerAs: "gradVM"
		})
		.when("/", {})
		.otherwise({
			redirectTo: "/gradient"
		});
}