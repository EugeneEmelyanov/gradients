/**
 * Created by Yauhen_Yemelyanau on 8/5/2015.
 */
(function () {
	angular
			.module("directives")
			.directive("gradients.preset", gradientsPresets);

	function gradientsPresets(CalcCssString) {
		return {
			template: "<div class='preset' style='{{styleStr}}'></div>",
			restrict: "E",
			scope: {
				presetStyle: "=presetStyle",
				gradientStyles: "=gradientStyles",
				gradientType: "=gradientType",
				onPresetChanged: "&onPresetChanged"
			},
			link: function (scope, elem, attr) {

				scope.styleStr = CalcCssString.getCss(scope.gradientStyles, scope.gradientType, scope.presetStyle);

				elem.on("click", function (evt) {
					scope.onPresetChanged()(scope.presetStyle);
				});

			}
		}
	}

})();
