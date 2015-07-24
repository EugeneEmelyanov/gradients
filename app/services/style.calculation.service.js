/**
 * Created by Yauhen_Yemelyanau on 7/1/2015.
 */
(function() {
    var module = angular.module("gradientsApp");

    module.factory("calculateStyles", function() {

        var styleTemplate = "%1(%2, #FFFFFF 0%, #3366FF 100%)";

        function getObjectValueByName(name, collection) {
            if (typeof collection === "undefined" || collection == null) {
                return "";
            }

            return collection.filter(function(element, ind) {
                return element.name === name;
            })[0].value;

            return "";
        }

        return function(gradientsObject, data) {
            var style = gradientsObject.gradientStyle;
            var styleString = styleTemplate.concat("");
            switch(style) {
                case data.gradientStyles[0].name:
                    styleString = styleString.replace("%1", data.gradientStyles[0].value);
                    styleString = styleString.replace("%2", getObjectValueByName(gradientsObject.linearGradientDirection, data.linearGradientDirections));
                break;
                case data.gradientStyles[1].name:
                    styleString = styleString.replace("%1", data.gradientStyles[1].value);
                    styleString = styleString.replace("%2", "ellipse " + getObjectValueByName(gradientsObject.radialGradientSize, data.radialGradientSizes) + " at " +
                                    getObjectValueByName(gradientsObject.radialGradientPosition, data.radialGradientPositions));
                break;
            }
            return {'background-image': styleString};
        }
    });
})();