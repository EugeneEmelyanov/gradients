"use strict";

(function () {
	angular
			.module("gradientsApp")
			.factory("API", API);

	function API(config) {
		return {
			"GRADIENT_STYLES": config.baseUrl + "/api/v1/gradientstyles",
			"LINEAR_GRADIENT_DIRECTIONS": config.baseUrl + "/api/v1/lineardirections",
			"RADIAL_GRADIENT_POSITIONS": config.baseUrl + "/api/v1/radialpositions",
			"RADIAL_GRADIENT_SIZES": config.baseUrl + "/api/v1/radialgradientsizes",
			"GRADIENT_PRESETS": config.baseUrl + "/api/v1/presets",
			"GRADIENT_PRESETS_CREATE": config.baseUrl + "/api/v1/presets",
			"CSS_TEMPLATE": "./resources/csstemplate",
			"SEND_EMAIL": config.baseUrl + "/api/v1/email"
		}
	}
})();
