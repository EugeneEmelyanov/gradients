/**
 * Created by Yauhen_Yemelyanau on 8/5/2015.
 */
(function() {
	"use strict";

	angular
		.module("gradient-directives")
		.directive("gradients.preset", gradientsPresets);

	/*jshint latedef:false*/
	/*@ngInject*/
	function gradientsPresets(CalcCssString) {
		return {
			template: "<div class='preset' style='{{vm.styleStr}}'></div>",
			restrict: "E",
			controllerAs: "vm",
			bindToController: true,
			controller: function() {},
			scope: {
				presetStyle: "=presetStyle",
				gradientStyles: "=gradientStyles",
				gradientType: "=gradientType",
				onPresetChanged: "&onPresetChanged"
			},
			link: link
		};
		/*@ngInject*/
		function link(scope, elem, attr, ctrl) {

			ctrl.styleStr = CalcCssString.getCss(ctrl.gradientStyles, ctrl.gradientType, ctrl.presetStyle);

			elem.on("click", function() {
				ctrl.onPresetChanged()(ctrl.presetStyle);
			});
		}
	}



})();