/**
 * Created by Yauhen_Yemelyanau on 6/30/2015.
 */
(function() {
    var directives = angular.module('directives');

    directives.directive('gradients.stops', function() {
        return {
          templateUrl: './directives/gradient.stops.template.html',
          compile: function compile(tElement, attrs, transclude) {
            return {
              post: function postLink(scope, elem, attrs) {
                console.log("postlink");
              }
            }
          }
        }
    });

    directives.directive("colorPicker", function() {
      return {
          link: function postLink (scope, elem, attrs) {
            elem.colorpicker({color: attrs.colorPicker,
                              component: "#colorStop"}).on("changeColor.colorpicker", function(event) {
                var color = event.color.toHex();
                scope.changeColorStop(attrs.index, color);
            });
            attrs.$observe("colorPicker", function(value) {
              elem.colorpicker("setValue", value);
            })
            scope.$on("$destroy", function() {
              elem.colorpicker("destroy");
            })
          }
      }
    });
})();
