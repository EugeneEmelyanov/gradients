/**
 * Created by eugene on 6/24/15.
 */
(function () {
	angular
			.module('directives')
			.directive('gradients.header', header);

	function header() {
		return {
			restrict: "E",
			replace: true,
			templateUrl: "./directives/header.template.html"
		}
	}
})();
