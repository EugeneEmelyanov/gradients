/**
 * Created by eugene on 6/25/15.
 */
"use strict";

(function () {

	angular
			.module('gradientsApp')
			.controller('gradients.GradientsCtrl', GradientsController);

	function GradientsController($scope, $q, $timeout, stylesService, CalcCssString) {
		$scope.gradientStops = []
		$q.all([stylesService.getGradientStyles(),
			stylesService.getLinearGradientDirections(),
			stylesService.getRadialGradientPositions(),
			stylesService.getRadialGradientSizes(),
			stylesService.getGradientPresets()]).then(function (result) {
			$scope.data = {};
			$scope.data.gradientStyles = result[0].data.gradientStyles;
			$scope.data.linearGradientDirections = result[1].data.linearGradientDirections;
			$scope.data.radialGradientPositions = result[2].data.radialGradientPositions;
			$scope.data.radialGradientSizes = result[3].data.radialGradientSizes;
			$scope.presetItems = result[4].data.presets;
			angular.copy($scope.presetItems[0], $scope.gradientStops);


			$scope.gradient = {};
			$scope.gradient.gradientStyle = $scope.data.gradientStyles[0].name;
			$scope.gradient.linearGradientDirection = $scope.data.linearGradientDirections[0].name;
			$scope.gradient.radialGradientPosition = $scope.data.radialGradientPositions[0].name;
			$scope.gradient.radialGradientSize = $scope.data.radialGradientSizes[0].name;

			$scope.$watchGroup(["gradient.gradientStyle",
				"gradient.linearGradientDirection",
				"gradient.radialGradientPosition",
				"gradient.radialGradientSize"], function () {
				validateString();
			});

			$scope.$watch("gradientStops", function (oldV, newV) {
				validateString();
			}, true);

			function validateString() {
				//$scope.styleString = calculateStyles($scope.gradient, $scope.data, $scope.gradientStops);
				$scope.styleString = CalcCssString.getCss($scope.data, $scope.gradient, $scope.gradientStops);
			}

			$scope.addStop = function (event) {
				var gradStopLength = $scope.gradientStops.length;
				var lastStop = $scope.gradientStops[gradStopLength - 1];
				var lastButOneStop = $scope.gradientStops[gradStopLength - 2];
				var loc = (Number(lastStop.location) + Number(lastButOneStop.location)) / 2;
				$scope.gradientStops.splice(gradStopLength - 1, 0, {
					location: loc,
					color: '#' + Math.floor(Math.random() * 16777215).toString(16)
				});
			}

			$scope.removeStop = function (event, index) {
				$scope.gradientStops.splice(index, 1);
			}

			$scope.changeColorStop = function (index, color) {
				$timeout(function () {
					$scope.gradientStops[index].color = color
				}, 10);
			}

			$scope.createPreset = function () {
				var preset = $scope.gradientStops;
				stylesService.createPreset({preset: preset}).then(function (res) {

				});
			}

			$scope.setSelectedPreset = function (stops) {
				angular.copy(stops, $scope.gradientStops);
				$scope.$digest();
			}

			//for ( var i = 0; i < $scope.presetItems.length; i ++) {
			//  var item = $scope.presetItems[i];
			//  item.styleString = calculateStyles(item, $scope.data, item.gradient.stops);
			//}

		});
	}

})();
