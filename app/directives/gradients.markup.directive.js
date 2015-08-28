(function () {

	angular
			.module("directives")
			.directive("gradients.markup", gradientsMarkup);

	function gradientsMarkup() {
		return {
			templateUrl: "./directives/gradients.markup.template.html",
			link: function (scope, elem, attr) {

			}
		}
	}

})();
