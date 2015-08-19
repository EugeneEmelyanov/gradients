(function() {
  var module = angular.module("gradientsApp");

  module.service("CalcCssString", function(gradientCSSTemplate) {
    return function() {
       var str = "";
       angular.$copy(gradientCSSTemplate, str);

       function getObjectValueByName(name, collection) {
        if (typeof collection === "undefined" || collection == null) {
          return "";
        }

        return collection.filter(function(element, ind) {
          return element.name === name;
        })[0].value;

        return "";
      }

       this.getCss = function(data, gradientObject, stops) {
         var str = "";
         angular.copy(gradientCSSTemplate, str);

         switch(gradientObject.gradientStyle) {
           case data.gradientStyles[0].name:
             str = str.replace("%gradientType", data.gradientStyles[0].value);
             str = str.replace("%gradientStyle", getObjectValueByName(gradientObject.linearGradientDirection, data.linearGradientDirections));
             break;
           case data.gradientStyles[1].name:
             str = str.replace("%gradientType", data.gradientStyles[1].value);
             str = str.replace("%gradientStyle", getObjectValueByName(gradientObject.radialGradientPosition, data.radialGradientPositions) +
               ", ellipse " + getObjectValueByName(gradientObject.radialGradientSize, data.radialGradientSizes)
             );
             break;
           default:
           case data.gradientStyles[0].name:
             str = str.replace("%gradientType", data.gradientStyles[0].value);
             str = str.replace("%gradientStyle", data.linearGradientDirections[0].value);
           }

           if (stops && stops.length > 0) {
             var stopsStr = stops.map(function(item) {
               return item.color +" " + item.location + "%";
             }).reduce(function(prValue, currentValue) {
               return prValue + ", " + currentValue;
             });
             str = str.replace("%stops", str);
           }

            return str;
         }
    }
  })
})();
