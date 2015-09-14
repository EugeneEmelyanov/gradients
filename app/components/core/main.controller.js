/**
 * Created by eugene on 8/18/15.
 */
"use strict";

(function() {

	angular
		.module("core")
		.controller('gradients.MainController', MainController);

	function MainController($location, $timeout, CommonServices, $scope, ModalService, WakeOpenShift) {

		var vm = this;
		vm.message = {};
		vm.pageName = pageName;
		vm.navigateToPath = navigateToPath;
		vm.onSendMessage = onSendMessage;
		vm.showModal = showModal;

		init();

		$scope.$on("gradients.showPopup", function(evt, data) {
			vm.showModal("Preset created.", "Thank you for your preset. It will be available in our presets library.");
		});

		showAngularStats({
			position: "topright"
		});

		function init() {
			WakeOpenShift.wakeOpenShift().then(function(){
				console.log("Open Shift available.")
			}, function(err){
				console.log("Open Shift will wake up soon.")
			});
		};

		function showModal(title, body) {
			// Just provide a template url, a controller and call 'showModal'.
			ModalService.showModal({
				templateUrl: "./components/core/popup/popup.template.html",
				controller: "PopupController",
				controllerAs: "vm",
				inputs: {
					title: title,
					body: body
				}
			}).then(function(modal) {
				// The modal object has the element built, if this is a bootstrap modal
				// you can call 'modal' to show it, if it's a custom modal just show or hide
				// it as you need to.
				modal.element.modal();
				modal.close.then(function(result) {
					$scope.message = result ? "You said Yes" : "You said No";
				});
			});
		}

		function onSendMessage() {
			CommonServices.sendMessage(vm.message).then(function(success) {
				vm.showModal("Inquirie delivered", "Thank you for your message. I'll get back to you shortly");
			}, function(err) {
				vm.showModal("Sorry, something went wrong.", "Please, drop me an email to eugene.v.emelyanov at gmail.com");
			});
		}

		function pageName() {
			var path = $location.path();
			if (path.indexOf("nav") == -1) {
				path = "/";
			}
			return path;
		}

		function navigateToPath(path, anc_id) {

			anc_id = "#mainBodyContainer";
			scrollToAnchor(anc_id);

			$location.path(path);
		}

		$timeout(function() {
			$("a[href*=#]").on("click", scrollToAnchor);
		});

		function scrollToAnchor(evt) {

			var anc_id = evt;
			if (typeof evt.target !== "undefined") {
				anc_id = $(evt.target).attr('href');
			}
			if (anc_id === "#") return;
			if (typeof $(anc_id).offset() === "undefined") {
				var listener = $scope.$root.$on("$locationChangeSuccess", function() {
					scrollToAnchor(evt);
					listener();
				});
				return;
			}
			$('html, body').stop().animate({
				scrollTop: $(anc_id).offset().top
			}, 1000);
		}
	}
})();