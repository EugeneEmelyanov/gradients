(function(){
	"use strict";

	angular
		.module("directives")
		.directive("stickyElement", stickyElement);

		/*jshint latedef:false*/
		function stickyElement() {
			return {
				restrict: "A",
				link: function(scope, elem, attrs) {
					$(elem).sticky({
						topSpacing: attrs.stickyElement
					});
				}
			};
		}
})();