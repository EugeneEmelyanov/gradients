/**
 * Created by Yauhen_Yemelyanau on 7/1/2015.
 */
(function() {
    var module = angular.module("gradientsApp");

    module.factory("calculateStyles", function(Constants) {

        var styleTemplate = "%1(%2, #FFFFFF 0%, #3366FF 100%)";

        return function(gradientsObject) {
            var style = gradientsObject.gradientStyle;
            var styles = Constants.gradientStyles;
            var styleString = styleTemplate.concat("");
            switch(style) {
                case Constants.gradientStyles[0]:
                    styleString = styleString.replace("%1", "linear-gradient");
                    styleString = styleString.replace("%2", gradientsObject.linearGradientDirection);
                break;
                case Constants.gradientStyles[1]:
                    styleString = styleString.replace("%1", "radial-gradient");
                    styleString = styleString.replace("%2", "ellipse " + gradientsObject.radialGradientSize + " at " +
                                    gradientsObject.radialGradientPosition);
                break;
            }
            return {'background-image': styleString};
        }
    });
})();