/**
 * Created by eugene on 6/25/15.
 */

(function() {
  var app = angular.module("directives");

  app.directive("gradients.options", function(Constants) {
      return {
        restrict: "E",
        controller: function($scope) {
            $scope.linearGradientTypeChanged = function(item) {
                $scope.gradient.linearGradientDirection = item;
            }
            $scope.radialGradientPositionChange = function(item) {
                $scope.gradient.radialGradientPosition = item;
            }
            $scope.radialGradientSizeChange = function(item) {
                $scope.gradient.radialGradientSize = item;
            }
        },
        templateUrl: "./directives/gradient.options.template.html"
      }
  });
})();
