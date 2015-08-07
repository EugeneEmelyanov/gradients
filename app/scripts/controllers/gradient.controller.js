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
              validateString();
            });

            $scope.$watch("gradientStops", function(oldV, newV) {
              validateString();
            }, true);

            function validateString() {
              $scope.styleString = calculateStyles($scope.gradient, $scope.data, $scope.gradientStops);
            }

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
              validateString();
            }

            $scope.presetItems = [
              {gradient: {
                gradientStyle: "Linear",
                gradientDirection: "to right",
                stops: [
                  {location: 0,
                   color: "#008080"},
                  {location: 25,
                   color: "#FFFFFF"},
                  {location: 50,
                   color: "#05C1FF"},
                  {location: 75,
                   color: "#FFFFFF"},
                  {location:100,
                   color: "#005757"}
                ]
              }},
              { gradient: {
                  gradientStyle: "Linear",
                    gradientDirection: "to right",
                    stops: [
                    {location: 0,
                      color: "#FF0000"},
                    {location:100,
                      color: "#000000"}
                  ]
              }},
            ];

          $scope.setSelectedPreset = function(stops) {
             $scope.gradientStops = stops;
             $scope.$digest();
          }

           //for ( var i = 0; i < $scope.presetItems.length; i ++) {
           //  var item = $scope.presetItems[i];
           //  item.styleString = calculateStyles(item, $scope.data, item.gradient.stops);
           //}

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
