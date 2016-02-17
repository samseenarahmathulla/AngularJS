(function() { //wrapping your javascript in a closure is a good habit.
var app = angular.module("store-directives", []);
app.directive("productTitle", function() {
	return {
		restrict: 'E', //custom directive restrict = A for attrivbute directive
		templateUrl: 'product.html'
	};
});
app.directive("productPanels", function() {
	return {
		restrict: 'E', //custom directive restrict = A for attrivbute directive
		templateUrl: 'product-panels.html',
		controller: 'PanelController', //controller: function() { //copy code from PanelController and delete panel controller functions.}
		controllerAs: 'panel'
	};
});
}) ();
