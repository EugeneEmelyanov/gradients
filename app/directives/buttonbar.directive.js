/**
 * Created by Yauhen_Yemelyanau on 6/30/2015.
 */
(function() {
    var module = angular.module("directives");

    module.directive('gradients.buttonbar', function() {
        return {
            templateUrl: '/directives/buttonbar.template.html',
            scope: {
                dataprovider: "@dataprovider",
                selectedItemChange: "&selectedItemChange"
            },
            link: function postLink(scope, elem, attr) {
                scope.items = JSON.parse(scope.dataprovider);
                var e = elem;
                scope.selectedItemIndex = 0;
                scope.selectedItemChange();

                scope.itemClicked = function(index) {
                    $($('.btn', e)[scope.selectedItemIndex]).removeClass('active');
                    scope.selectedItemIndex = index;
                    $($('.btn', e)[index]).addClass('active');
                    scope.selectedItemChange()( scope.items[index].name);
                }
            }
        }
    })
})();
