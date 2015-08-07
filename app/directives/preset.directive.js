/**
 * Created by Yauhen_Yemelyanau on 8/5/2015.
 */
(function() {
  var directives = angular.module("directives");

  directives.directive("gradients.preset", function(calculateStyles) {
    return {
      template: "<div class='preset' ng-style='styleStr'></div>",
      restrict: "E",
      scope: {
        presetStyle: "=presetStyle",
        gradientStyles: "=gradientStyles",
        onPresetChanged: "&onPresetChanged"
      },
      link: function(scope, elem, attr) {

        scope.styleStr = calculateStyles(scope.presetStyle, scope.gradientStyles, scope.presetStyle.gradient.stops);

        elem.on("click", function(evt) {
           scope.onPresetChanged()(scope.presetStyle.gradient.stops);
        });

      }
    }
  });

})();
