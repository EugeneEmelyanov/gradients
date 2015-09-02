/**
 * Created by Yauhen_Yemelyanau on 8/5/2015.
 */
(function() {
	"use strict";

	angular
		.module("directives")
		.directive("gradients.preset", gradientsPresets);

	function gradientsPresets(CalcCssString) {
		return {
			template: "<div class='preset' style='{{vm.styleStr}}'></div>",
			restrict: "E",
			controllerAs: "vm",
			bindToController: true,
			controller: function($scope){},
			scope: {
				presetStyle: "=presetStyle",
				gradientStyles: "=gradientStyles",
				gradientType: "=gradientType",
				onPresetChanged: "&onPresetChanged"
			},
			link: function(scope, elem, attr, ctrl) {

				ctrl.styleStr = CalcCssString.getCss(ctrl.gradientStyles, ctrl.gradientType, ctrl.presetStyle);

				elem.on("click", function(evt) {
					ctrl.onPresetChanged()(ctrl.presetStyle);
				});

			}
		};
	}

})();