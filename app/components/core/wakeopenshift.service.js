(function() {
	"use strict";

	angular
		.module("core")
		.service("WakeOpenShift", wakeOpenShift);

		function wakeOpenShift($http, API) {
			this.wakeOpenShift = wakeUp;

			function wakeUp() {
				return $http.get(API.PING_OPENSHIFT)
			}
		}
})();