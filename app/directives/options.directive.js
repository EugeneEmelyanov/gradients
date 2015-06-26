/**
 * Created by eugene on 6/25/15.
 */

(function() {
  var app = angular.module("directives");

  app.directive("gradients.options", function() {
      return {
        restrict: "E",
        replace: true,
        templateUrl: "/directives/gradientOptions.html"
      }
  });
})();
