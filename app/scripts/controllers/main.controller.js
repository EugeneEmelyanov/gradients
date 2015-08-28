/**
 * Created by eugene on 8/18/15.
 */
"use strict";

(function () {

	angular
			.module("gradientsApp")
			.controller('gradients.MainController', MainController);

	function MainController($location, CommonServices, $scope) {

		this.message = {};
		this.pageName = pageName;
		this.navigateToPath = navigateToPath;
		this.onSendMessage = onSendMessage;

		showAngularStats();

		function onSendMessage () {
			CommonServices.sendMessage(this.message);
		}

		function pageName() {
			return $location.path();
		}

		function navigateToPath(path, anc_id) {
			if (path === "/") {
				if ($location.path() !== path) {
					var listener = $scope.$root.$on("$locationChangeSuccess", function () {
						scrollToAcnhor();
						listener();
					});
				} else {
					scrollToAcnhor();
				}
			} else {
				anc_id = "#mainBodyContainer";
				scrollToAcnhor();
			}

			$location.path(path);

			function scrollToAcnhor() {
				$('html, body').stop().animate({
					scrollTop: $(anc_id).offset().top
				}, 1000);
			}
		}
	}
})();
