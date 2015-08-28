(function () {

	angular.module("directives")
			.directive("gradients.presets", gradientsPresets);

	function gradientsPresets() {
		return {
			templateUrl: "./directives/gradient.presets.template.html",
			link: function (scope, elem, attr) {
				console.log('link: ');
			}
		}
	};
})();
