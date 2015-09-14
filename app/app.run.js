(function() {
	"use strict";

	angular
		.module("app")
		.run(runFunction);
	/*jshint latedef:false*/
	function runFunction($window, $document) {
		if ($document.readyState === "complete") {
			loadListener();

		} else {
			$(loadListener);
		}

		function loadListener() {
			$("#status").fadeOut();
			$("#preloader").delay(300).fadeOut("slow");
		};
	}
})();