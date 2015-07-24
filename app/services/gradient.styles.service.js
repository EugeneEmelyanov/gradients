(function() {
    var module = angular.module("gradientsApp");

    var stylesService = module.factory("stylesService", function($http, API) {

        return {
            getGradientStyles: function() {
                return $http.get(API.GRADIENT_STYLES)
            },
            getLinearGradientDirections: function() {
                return $http.get(API.LINEAR_GRADIENT_DIRECTIONS)
            },
            getRadialGradientPositions: function() {
                return $http.get(API.RADIAL_GRADIENT_POSITIONS)
            },
            getRadialGradientSizes: function() {
                return $http.get(API.RADIAL_GRADIENT_SIZES)
            }
        }
    })
})();