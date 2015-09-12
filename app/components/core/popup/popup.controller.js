(function() {
	"use strict";

	angular
		.module("popup")
		.controller("PopupController", PopupController);

	/*jshint latedef:false*/
	function PopupController($scope, title, body, close) {
		var vm = this;
		vm.title = title;
		vm.body = body;
		vm.closePopup = closePopup;

		/*jshint latedef:false*/
		function closePopup() {
			close(null, 500);
		}
	}
})();