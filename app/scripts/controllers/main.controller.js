/**
 * Created by eugene on 8/18/15.
 */
(function() {

  var app = angular.module("gradientsApp");

  app.controller('gradients.MainController', function($scope, $route, $location) {
    $scope.pageName = function() {
      return $location.path();
    }

    $location.path("/gradient");

    $scope.go = function(path, anchor) {
      if (path === "/") {
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset() ? $(anchor.attr('href')).offset().top: 0
        }, 1000);
      }
      $location.path(path);
    }
  });
})();
