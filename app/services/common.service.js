/**
 * Created by eugene on 8/26/15.
 */
(function() {
	var app = angular.module("gradientsApp");

	app.factory("CommonServices", function($http, API) {
		return {
			sendMessage: function(message) {
				return $http.post(API.SEND_EMAIL, message);
			}
		}
	})
})()
