(function() {

	"use strict";

	angular
		.module("core-directives")
		.directive("colorPicker", colorPicker);

	/*jshint latedef:false*/
	function colorPicker() {
		return {
			link: postLink
		};
	}

	/*@ngInject*/
	function postLink(scope, elem, attrs) {
		var vm = scope.gradVM;
		elem.colorpicker({
			color: attrs.colorPicker,
			component: "#colorStop"
		}).on("changeColor.colorpicker", function(event) {
			var color = event.color.toHex();
			vm.changeColorStop(attrs.index, color);
		});

		attrs.$observe("colorPicker", function(value) {
			elem.colorpicker("setValue", value);
		});

		scope.$on("$destroy", function() {
			elem.colorpicker("destroy");
		});
	}
})();