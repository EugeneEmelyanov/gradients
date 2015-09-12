/**
 * Created by Yauhen_Yemelyanau on 6/30/2015.
 */
(function() {
	"use strict";

	angular
		.module("core-directives")
		.directive("gradients.buttonbar", ButtonBar);

	/*jshint latedef:false*/
	function ButtonBar() {
		return {
			templateUrl: "./shared/core/buttonbar/buttonbar.template.html",
			scope: {
				dataprovider: "=dataprovider",
				selectedItemChange: "&selectedItemChange"
			},
			/*@ngInject*/
			link: function postLink(scope, elem) {
				var e = elem;
				scope.selectedItemIndex = 0;
				scope.selectedItemChange();

				scope.itemClicked = function(index) {
					$($(".btn", e)[scope.selectedItemIndex]).removeClass("active");
					scope.selectedItemIndex = index;
					$($(".btn", e)[index]).addClass("active");
					scope.selectedItemChange()(scope.dataprovider[index].name);
				};
			}
		};
	}
})();