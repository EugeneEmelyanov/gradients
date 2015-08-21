'use strict';

/**
 * @ngdoc function
 * @name gradientsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gradientsApp
 */
angular.module('gradientsApp')
		.controller('AboutCtrl', function ($scope) {
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];
		});
