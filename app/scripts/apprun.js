(function() {
	"use strict";

	angular
		.module("gradientsApp")
		.run(runFunction);
	/*jshing latedef:false*/
	function runFunction($window) {
		$window.onload = function() {
			$("#status").fadeOut();
			$("#preloader").delay(300).fadeOut('slow');
		};
	}
})();