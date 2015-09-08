(function() {

	"use strict";

	angular
		.module("services")
		.service("ModalService", ModalService);

	ModalService.$inject = ["$document", "$compile", "$controller", "$http", "$rootScope", "$q", "$templateCache"];
	/*jshint latedef:false*/
	function ModalService($document, $compile, $controller, $http, $rootScope, $q, $templateCache) {

		var self = this;

		self.showModal = showModal;

		var body = $document.find("body");

		function getTemplate(template, templateUrl) {
			var defer = $q.defer();

			if (template) {
				defer.resolve(template);
			} else if (templateUrl) {
				var templ = $templateCache.get(templateUrl);
				if (templ) {
					defer.resolve(templ);
				} else {
					$http({
							method: 'GET',
							url: templateUrl,
							cache: true
						})
						.then(function(result) {
							$templateCache.put(templateUrl, result.data);
							defer.resolve(result.data);
						},
						function(error) {
							defer.reject(error);
						});
				}
			} else {
				defer.reject("No template or templateUrl specified");
			}
			return defer.promise;
		}

		function showModal(options) {
			var defer = $q.defer();

			var controllerName = options.controller;
			if (!controllerName) {
				deffer.reject("No controller specified");
				return defer.promise;
			}

			if (options.controllerAs) {
				controllerName = controllerName + " as " + options.controllerAs;
			}

			getTemplate(options.template, options.templateUrl)
				.then(function(template) {
					var modalScope = $rootScope.$new();
					var closeDefer = $q.defer();

					var inputs = {
						$scope: modalScope,
						close: function(result, delay) {
							if (delay === undefined || delay === null) delay = 0;
							window.setTimeout(function() {
								//  Resolve the 'close' promise.
								closeDefer.resolve(result);

								//  We can now clean up the scope and remove the element from the DOM.
								modalScope.$destroy();
								modalElement.remove();

								//  Unless we null out all of these objects we seem to suffer
								//  from memory leaks, if anyone can explain why then I'd 
								//  be very interested to know.
								inputs.close = null;
								defer = null;
								closeDefer = null;
								modal = null;
								inputs = null;
								modalElement = null;
								modalScope = null;
							}, delay);
						}
					};

					if (options.inputs) {
						for (var inputName in options.inputs) {
							inputs[inputName] = options.inputs[inputName];
						}
					}

					var modalElementTemplate = angular.element(template);
					var linkFn = $compile(modalElementTemplate);
					var modalElement = linkFn(modalScope);
					inputs.$element = modalElement;

					var modalController = $controller(controllerName, inputs);

					if (options.appendElement) {
						options.appendElement.append(modalElement);
					} else {
						body.append(modalElement);
					}

					var modal = {
						controller: modalController,
						scope: modalScope,
						element: modalElement,
						close: closeDefer.promise
					};

					defer.resolve(modal);

				}).then(null, function(error) {
					defer.reject(error);
				});

			return defer.promise;
		}
	}

})();