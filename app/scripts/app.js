'use strict';

/**
 * @ngdoc overview
 * @name gradientsApp
 * @description
 * # gradientsApp
 *
 * Main module of the application.
 */
angular
  .module('gradientsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/gradient', {
        templateUrl: 'views/gradients.html',
        controller: 'gradients.GradientsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/gradient'
      });
  });
