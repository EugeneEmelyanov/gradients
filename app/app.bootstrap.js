"use strict";

(function () {
	angular
			.injector(["ng"])
			.invoke(["$http", function ($http) {

				$http.get("./resources/csstemplate").then(function (result) {
					angular.module("core").constant("config", {
						baseUrl: "http://eugenecanhelp-app1ica.rhcloud.com"
					});

					angular.module("core").constant("gradientCSSTemplate", result.data);

					angular.element(document).ready(function () {
						angular.bootstrap(document, ['app']/*, {strictDi: true}*/);
					});

				});
			}]);
})();
