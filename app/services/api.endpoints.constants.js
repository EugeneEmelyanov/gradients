(function() {
    var module = angular.module("gradientsApp");

    module.factory("API", function(config) {
        return {
            "GRADIENT_STYLES": config.baseUrl + "/resources/gradientStyles.json",
            "LINEAR_GRADIENT_DIRECTIONS": config.baseUrl + "/resources/linearGradientDirections.json",
            "RADIAL_GRADIENT_POSITIONS": config.baseUrl + "/resources/radialGradientPositions.json",
            "RADIAL_GRADIENT_SIZES": config.baseUrl + "/resources/radialGradientSizes.json",
            "GRADIENT_PRESETS": config.baseUrl + "/resources/presets.json",
            "CSS_TEMPLATE": config.baseUrl + "resources/csstemplate"
        }
    })
})();
