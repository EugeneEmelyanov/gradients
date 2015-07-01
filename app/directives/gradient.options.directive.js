/**
 * Created by eugene on 6/25/15.
 */

(function() {
  var app = angular.module("directives");

  app.directive("gradients.options", function(Constants) {
      return {
        restrict: "E",
        scope: {
            gradient: "=gradient"
        },
        controller: function($scope) {


            $scope.model = {};
            $scope.model.gradientStyles = Constants.gradientStyles;
            $scope.model.linearGradientDirections = Constants.linearGradientDirections;
            $scope.model.radialGradientPositions = Constants.radialGradientPositions;
            $scope.model.radialGradientSizes = Constants.radialGradientSizes;

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
        templateUrl: "/directives/gradient.options.template.html"
      }
  });
})();
