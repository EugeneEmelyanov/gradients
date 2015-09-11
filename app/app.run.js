(function() {
	"use strict";

	angular
		.module("app")
		.run(runFunction);
	/*jshint latedef:false*/
	function runFunction($window) {
		$window.onload = function() {
			$("#status").fadeOut();
			$("#preloader").delay(300).fadeOut("slow");
		};
	}
})();