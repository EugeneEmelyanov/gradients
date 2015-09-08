/**
 * Created by eugene on 8/26/15.
 */

"use strict";

(function() {
	angular
		.module("gradientsApp")
		.factory("CommonServices", CommonServices);

	/*jshint latedef:false*/
	/*@ngInject*/
	function CommonServices($http, API) {
		return {
			sendMessage: function(message) {
				return $http.post(API.SEND_EMAIL, message);
			}
		};
	}
})();