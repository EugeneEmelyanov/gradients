(function() {
  var module = angular.module("gradientsApp");

  module.service("CalcCssString", function(gradientCSSTemplate) {
       var str = "";
       angular.copy(gradientCSSTemplate, str);

       function getObjectValueByName(name, collection, field) {

        if (typeof field === "undefined" || field == null) field = "value";

        if (typeof collection === "undefined" || collection == null) {
          return "";
        }

        return collection.filter(function(element, ind) {
          return element.name === name;
        })[0][field];

        return "";
      }

       this.getCss = function(data, gradientObject, stops) {
         var str = "";
         str = angular.copy(gradientCSSTemplate, str);

         switch(gradientObject.gradientStyle) {
           case data.gradientStyles[0].name:
             str = str.replace(/%gradientType/g, data.gradientStyles[0].value);
             str = str.replace(/%w3cGradientStyle/g, gradientObject.linearGradientDirection);

             var safariValues = getObjectValueByName(gradientObject.linearGradientDirection, data.linearGradientDirections, "safariValue");
             str = str.replace(/%safariGradientStyle/g, safariValues[0] +", " + safariValues[1]);
             str = str.replace(/%gradientStyle/g, getObjectValueByName(gradientObject.linearGradientDirection, data.linearGradientDirections));
             break;
           case data.gradientStyles[1].name:
             str = str.replace(/%gradientType/g, data.gradientStyles[1].value);
             str = str.replace(/%w3cGradientStyle/g, 'ellipse ' + gradientObject.radialGradientSize + " at " + gradientObject.radialGradientPosition);
             str = str.replace(/%gradientStyle/g, getObjectValueByName(gradientObject.radialGradientPosition, data.radialGradientPositions) +
               ", ellipse " + getObjectValueByName(gradientObject.radialGradientSize, data.radialGradientSizes)
             );
             var safariValues = getObjectValueByName(gradientObject.radialGradientPosition, data.radialGradientPositions, "safariValue");
             str = str.replace(/%safariGradientStyle/g, safariValues[0] +", " + safariValues[1]);
             break;
           default:
           case data.gradientStyles[0].name:
             str = str.replace(/%gradientType/g, data.gradientStyles[0].value);
             str = str.replace(/%gradientStyle/g, data.linearGradientDirections[0].value);
           }

         str = str.replace(/%safariGradientType/g, gradientObject.gradientStyle.toLowerCase());


           if (stops && stops.length > 0) {
             var stopsStr = stops.map(function(item) {
               return item.color +" " + item.location + "%";
             }).reduce(function(prValue, currentValue) {
               return prValue + ", " + currentValue;
             });
             str = str.replace(/%gradientStops/g, stopsStr);

             //for safari
             stopsStr = stops.map(function(item) {
               return "color-stop(" + item.location + ", " + item.color + ")"
             }).reduce(function(prValue, currentValue) {
                return prValue + ", " + currentValue;
             });
             str = str.replace(/%safariGradientStops/g, stopsStr);
           }

            return str;
         }
  })
})();
