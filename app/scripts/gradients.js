(function() {
    angular.injector(["ng"]).invoke(["$http", function($http) {

        setTimeout(function() {
            angular.module("gradientsApp").constant("config", {
                baseUrl: "/"
            });
            angular.element(document).ready(function () {
                angular.bootstrap(document, ['gradientsApp']);
            });
        }, 10)
    }])
})();