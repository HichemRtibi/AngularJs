/**
 * 
 */

var app = angular.module("Myapp", []);

app.controller("Ctrl", function($scope) {
	$scope.name = "Hichem";

	$scope.updateName = function() {
		$scope.name = "salem";
	}
})