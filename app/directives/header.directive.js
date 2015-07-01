/**
 * Created by eugene on 6/24/15.
 */
(function(){
  var app = angular.module('directives');

  app.directive('gradients.header', function() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "/directives/header.template.html"
    }
  })
})();
