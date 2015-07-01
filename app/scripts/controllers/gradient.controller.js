/**
 * Created by eugene on 6/25/15.
 */
(function() {

  var app = angular.module('gradientsApp');

  app.controller('gradients.GradientsCtrl', function($scope, Constants) {
        $scope.gradient = {};
        $scope.gradient.gradientStyle = Constants.gradientStyles[0];
        $scope.gradient.linearGradientDirection = Constants.linearGradientDirections[0];
        $scope.gradient.radialGradientPosition = Constants.radialGradientPositions[0];
        $scope.gradient.radialGradientSize = Constants.radialGradientSizes[0]
  });

})();
