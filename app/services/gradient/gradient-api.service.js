"use strict";

(function () {
	angular
			.module("gradient-services")
			.factory("gradientDataService", StylesService);

	function StylesService($http, API) {

		return {
			getGradientStyles: function () {
				return $http.get(API.GRADIENT_STYLES)
			},
			getLinearGradientDirections: function () {
				return $http.get(API.LINEAR_GRADIENT_DIRECTIONS)
			},
			getRadialGradientPositions: function () {
				return $http.get(API.RADIAL_GRADIENT_POSITIONS)
			},
			getRadialGradientSizes: function () {
				return $http.get(API.RADIAL_GRADIENT_SIZES)
			},
			getGradientPresets: function () {
				return $http.get(API.GRADIENT_PRESETS);
			},
			getGradientCssTemplate: function () {
				return $http.get(API.CSS_TEMPLATE);
			},
			createPreset: function (preset) {
				return $http.put(API.GRADIENT_PRESETS_CREATE, preset);
			}
		}
	}
})();
