/**
 * Created by Yauhen_Yemelyanau on 8/5/2015.
 */
(function() {
  var directives = angular.module("directives");

  directives.directive("gradients.preset", function() {
    return {
      template: "<div class='preset' ng-style='styleStr'></div>",
      restrict: "E",
      scope: {
        styleStr: "=styleStr"
      },
      link: function(scope, elem, attr) {
        console.log("styleStr" + scope.styleStr)
      }
    }
  });

})();
