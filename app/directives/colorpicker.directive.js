(function () {

	angular
			.module("directives")
			.directive("colorPicker", colorPicker);


	function colorPicker() {
		return {
			link: function postLink(scope, elem, attrs) {
				elem.colorpicker({
					color: attrs.colorPicker,
					component: "#colorStop"
				}).on("changeColor.colorpicker", function (event) {
					var color = event.color.toHex();
					scope.changeColorStop(attrs.index, color);
				});
				attrs.$observe("colorPicker", function (value) {
					elem.colorpicker("setValue", value);
				})
				scope.$on("$destroy", function () {
					elem.colorpicker("destroy");
				})
			}
		}
	};
})();
