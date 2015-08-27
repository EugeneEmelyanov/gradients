/**
 * Created by Yauhen_Yemelyanau on 6/30/2015.
 */
(function () {
	angular
			.module('directives')
			.directive('gradients.preview', function () {
				return {
					templateUrl: "./directives/gradient.preview.template.html",
					controller: "gradients.GradientsCtrl",
					restrict: "E"
				}
			})
})();
