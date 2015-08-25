(function() {
    var module = angular.module("gradientsApp");

    module.factory("API", function(config) {
        return {
            "GRADIENT_STYLES": "http://eugenecanhelp-app1ica.rhcloud.com/api/v1/gradientstyles",
            "LINEAR_GRADIENT_DIRECTIONS": config.baseUrl + "/resources/linearGradientDirections.json",
            "RADIAL_GRADIENT_POSITIONS": config.baseUrl + "/resources/radialGradientPositions.json",
            "RADIAL_GRADIENT_SIZES": "http://eugenecanhelp-app1ica.rhcloud.com/api/v1/radialgradientsizes",
            "GRADIENT_PRESETS": config.baseUrl + "/resources/presets.json",
            "CSS_TEMPLATE": config.baseUrl + "resources/csstemplate"
        }
    })
})();
