/**
 * Created by eugene on 6/25/15.
 */

(function() {
  var app = angular.module("directives");

  app.directive("gradients.options", function() {
      return {
        restrict: "E",
        replace: true,
        scope: {
          gradientType: "=gradientType"
        },
        controller: function($scope) {
          $scope.gradientType = "linear";
        },
        templateUrl: "/directives/gradientOptions.html"
      }
  });
})();
