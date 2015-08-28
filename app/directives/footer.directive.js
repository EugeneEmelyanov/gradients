/**
 * Created by eugene on 6/24/15.
 */
(function () {
	angular
			.module('directives')
			.directive('gradients.footer', footer);

	function footer() {
		return {
			restrict: "E",
			replace: true,
			templateUrl: "./directives/footer.template.html"
		}
	}
})();
