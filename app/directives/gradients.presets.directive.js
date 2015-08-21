(function () {

	var directives = angular.module("directives");

	directives.directive("gradients.presets", function () {
		return {
			templateUrl: "./directives/gradient.presets.template.html",
			link: function (scope, elem, attr) {
				console.log('link: ');
			}
		}
	});
})();
