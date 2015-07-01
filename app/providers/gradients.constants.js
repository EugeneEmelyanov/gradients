/**
 * Created by Yauhen_Yemelyanau on 6/30/2015.
 */
(function(){
    var providerModule = angular.module("gradientsApp");

    providerModule.provider('Constants', function() {
        return {
            $get: function() {
                return {
                    gradientStyles: ["Linear", "Radial"],
                    linearGradientDirections: ["to bottom right", "to bottom", "to bottom left", "to right", "to left", "to top right",
                                    "to top", "to top left"],
                    radialGradientPositions: ["top left", "top center", "top right", "middle left", "middle center", "middle right", "bottom left", "bottom center", "bottom right"],
                    radialGradientSizes: ["closest-side", "closest-corner", "farther-side", "farthest-corner"]
                }
            }
        }
    })
})();