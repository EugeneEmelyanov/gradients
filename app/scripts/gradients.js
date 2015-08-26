(function() {
    angular.injector(["ng"]).invoke(["$http", function($http) {

      $http.get("./resources/csstemplate").then(function (result) {
        angular.module("gradientsApp").constant("config", {
          baseUrl: "http://eugenecanhelp-app1ica.rhcloud.com"
        });

        angular.module("gradientsApp").constant("gradientCSSTemplate", result.data);

        angular.element(document).ready(function () {
          angular.bootstrap(document, ['gradientsApp']);
        });

      });
    }]);
})();
