(function() {
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
		.module("app", [
			"ngAnimate",
			"ngCookies",
			"ngResource",
			"ngRoute",
			"ngSanitize",
			"ngTouch",
			"core",
			"gradients"
		]);

})();