/**
 * Created by eugene on 6/25/15.
 */
"use strict";

(function() {

	angular
		.module("gradients")
		.controller("gradients.GradientsCtrl", GradientsController);

	/*jshint latedef:false */
	/*@ngInject*/
	function GradientsController($scope, $q, $timeout, gradientsData, CalcCssString, gradientDataService) {

		var gradVM = this;
		gradVM.gradientStops = [];
		gradVM.addStop = addStop;
		gradVM.removeStop = removeStop;
		gradVM.changeColorStop = changeColorStop;
		gradVM.createPreset = createPreset;
		gradVM.setSelectedPreset = setSelectedPreset;

		//gradient styles
		gradVM.data = {};
		gradVM.data.gradientStyles = gradientsData[0].data.gradientStyles;
		gradVM.data.linearGradientDirections = gradientsData[1].data.linearGradientDirections;
		gradVM.data.radialGradientPositions = gradientsData[2].data.radialGradientPositions;
		gradVM.data.radialGradientSizes = gradientsData[3].data.radialGradientSizes;
		gradVM.presetItems = gradientsData[4].data.presets;
		angular.copy(gradVM.presetItems[0], gradVM.gradientStops);

		//current gradient
		gradVM.gradient = {};
		gradVM.gradient.gradientStyle = gradVM.data.gradientStyles[0].name;
		gradVM.gradient.linearGradientDirection = gradVM.data.linearGradientDirections[0].name;
		gradVM.gradient.radialGradientPosition = gradVM.data.radialGradientPositions[0].name;
		gradVM.gradient.radialGradientSize = gradVM.data.radialGradientSizes[0].name;

		$scope.$watchGroup(["gradVM.gradient.gradientStyle",
			"gradVM.gradient.linearGradientDirection",
			"gradVM.gradient.radialGradientPosition",
			"gradVM.gradient.radialGradientSize"
		], function() {
			validateString();
		});

		$scope.$watch("gradVM.gradientStops", function() {
			validateString();
		}, true);


		function validateString() {
			gradVM.styleString = CalcCssString.getCss(gradVM.data, gradVM.gradient, gradVM.gradientStops);
		}

		function addStop() {
			var gradStopLength = gradVM.gradientStops.length;
			var lastStop = gradVM.gradientStops[gradStopLength - 1];
			var lastButOneStop = gradVM.gradientStops[gradStopLength - 2];
			var loc = (Number(lastStop.location) + Number(lastButOneStop.location)) / 2;
			gradVM.gradientStops.splice(gradStopLength - 1, 0, {
				location: loc,
				color: "#" + Math.floor(Math.random() * 16777215).toString(16)
			});
		}

		function removeStop(event, index) {
			gradVM.gradientStops.splice(index, 1);
		}

		function changeColorStop(index, color) {
			$timeout(function() {
				gradVM.gradientStops[index].color = color;
			}, 10);
		}

		function createPreset() {
			var preset = gradVM.gradientStops;
			gradientDataService.createPreset({
				preset: preset
			}).then(function(res) {
				$scope.$emit("gradients.showPopup", res.data);
			}, function(err) {
				$scope.$emit("gradients.showPopup", err);
			});
		}

		function setSelectedPreset(stops) {
			angular.copy(stops, gradVM.gradientStops);
			$scope.$digest();
		}
	}

})();