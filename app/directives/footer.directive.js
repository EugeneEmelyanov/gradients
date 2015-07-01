/**
 * Created by eugene on 6/24/15.
 */
(function() {
  var app = angular.module('directives');

  app.directive('gradients.footer', function() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "/directives/footer.template.html"
    }
  })
})();
