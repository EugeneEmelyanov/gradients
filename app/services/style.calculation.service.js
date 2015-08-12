/**
 * Created by Yauhen_Yemelyanau on 7/1/2015.
 */
(function() {
    var module = angular.module("gradientsApp");

    module.factory("calculateStyles", function() {

        var styleTemplate = "%1(%2, %3)";

        function getObjectValueByName(name, collection) {
            if (typeof collection === "undefined" || collection == null) {
                return "";
            }

            return collection.filter(function(element, ind) {
                return element.name === name;
            })[0].value;

            return "";
        }

        return function(gradientsObject, data, stops) {
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
              default:
              case data.gradientStyles[0].name:
                styleString = styleString.replace("%1", data.gradientStyles[0].value);
                styleString = styleString.replace("%2", data.linearGradientDirections[0].value);
            }

            if (stops && stops.length > 0) {
              var str = stops.map(function(item) {
                return item.color +" " + item.location + "%";
              }).reduce(function(prValue, currentValue) {
                return prValue + ", " + currentValue;
              });
              styleString = styleString.replace("%3", str);
            }
          return {'background-image': styleString};
        }
    });
})();
