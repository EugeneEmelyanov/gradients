/**
 * Created by eugene on 6/24/15.
 */
(function () {
	angular
			.module('directives')
			.directive('gradients.footer', function () {
				return {
					restrict: "E",
					replace: true,
					templateUrl: "./directives/footer.template.html"
				}
			})
})();
