/**
 * Created by eugene on 6/25/15.
 */

(function() {
  var app = angular.module("directives");

  app.directive("gradients.options", function() {
      return {
        restrict: "E",
        scope: {
          gradientType: "=gradientType"
        },
        controller: function($scope) {
            $scope.gradientType = "linear";
            $scope.linearGradientTypeChanged = function() {
                //TODO:linear gradient type change hanlder
            }
            $scope.radialGradientPositionChange = function() {

            }
            $scope.radialGradientSizeChange = function() {

            }
        },
        templateUrl: "/directives/gradient.options.template.html"
      }
  });
})();
