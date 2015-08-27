/**
 * Created by Yauhen_Yemelyanau on 6/30/2015.
 */
(function () {

	angular
			.module('directives')
			.directive('gradients.stops', function () {
				return {
					templateUrl: './directives/gradient.stops.template.html',
					compile: function compile(tElement, attrs, transclude) {
						return {
							post: function postLink(scope, elem, attrs) {
								console.log("postlink");
							}
						}
					}
				}
			});


})();
