/**
 * Created by eugene on 6/25/15.
 */
(function() {

  var app = angular.module('gradientsApp');

  app.controller('gradients.GradientsCtrl', function($scope, $q, stylesService, calculateStyles) {

        $q.all([stylesService.getGradientStyles(),
                stylesService.getLinearGradientDirections(),
                stylesService.getRadialGradientPositions(),
                stylesService.getRadialGradientSizes()]).then(function(result) {
            $scope.data = {};
            $scope.data.gradientStyles = result[0].data.gradientStyles;
            $scope.data.linearGradientDirections = result[1].data.linearGradientDirections;
            $scope.data.radialGradientPositions = result[2].data.radialGradientPositions;
            $scope.data.radialGradientSizes = result[3].data.radialGradientSizes;


            $scope.gradient = {};
            $scope.gradient.gradientStyle = $scope.data.gradientStyles[0].name;
            $scope.gradient.linearGradientDirection = $scope.data.linearGradientDirections[0].name;
            $scope.gradient.radialGradientPosition = $scope.data.radialGradientPositions[0].name;
            $scope.gradient.radialGradientSize = $scope.data.radialGradientSizes[0].name;

            $scope.$watchGroup(["gradient.gradientStyle",
                "gradient.linearGradientDirection",
                "gradient.radialGradientPosition",
                "gradient.radialGradientSize"], function() {
                $scope.styleString = calculateStyles($scope.gradient, $scope.data);
            });

        });


  });

})();
