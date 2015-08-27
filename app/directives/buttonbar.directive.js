/**
 * Created by Yauhen_Yemelyanau on 6/30/2015.
 */
(function () {
	angular
			.module("directives")
			.directive('gradients.buttonbar', function () {
				return {
					templateUrl: './directives/buttonbar.template.html',
					scope: {
						dataprovider: "=dataprovider",
						selectedItemChange: "&selectedItemChange"
					},
					link: function postLink(scope, elem, attr) {
						var e = elem;
						scope.selectedItemIndex = 0;
						scope.selectedItemChange();

						scope.itemClicked = function (index) {
							$($('.btn', e)[scope.selectedItemIndex]).removeClass('active');
							scope.selectedItemIndex = index;
							$($('.btn', e)[index]).addClass('active');
							scope.selectedItemChange()(scope.dataprovider[index].name);
						}
					}
				}
			})
})();
