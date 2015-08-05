/**
 * Created by eugene on 6/25/15.
 */
(function() {

  var app = angular.module('gradientsApp');

  app.controller('gradients.GradientsCtrl', function($scope, $q, stylesService, calculateStyles) {
        $scope.gradientStops = []
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
                $scope.styleString = calculateStyles($scope.gradient, $scope.data, $scope.gradientStops);
            });

            $scope.$watch("gradientStops", function(oldV, newV) {
              $scope.styleString = calculateStyles($scope.gradient, $scope.data, $scope.gradientStops);
            }, true);

            $scope.addStop = function(event) {
              var gradStopLength = $scope.gradientStops.length;
              var lastStop = $scope.gradientStops[gradStopLength- 1];
              var lastButOneStop = $scope.gradientStops[gradStopLength - 2];
              var loc = (Number(lastStop.location) + Number(lastButOneStop.location)) / 2;
              $scope.gradientStops.splice(gradStopLength - 1, 0, {location:loc, color: '#'+ Math.floor(Math.random()*16777215).toString(16)});
            }

            $scope.removeStop = function(event, index) {
              $scope.gradientStops.splice(index, 1);
            }

            $scope.changeColorStop = function(index, color) {
              $scope.gradientStops[index].color = color;
            }

            $scope.gradientStops = [{
              location: 0,
              color: "#FFFFFF"
            },
              {
                location: 50,
                color: "#037B3D"
              },
              {
                location: 75,
                color: "#D13305"
              },
              {
                location: 100,
                color: "#3366FF"
              }]

        });


  });

})();
