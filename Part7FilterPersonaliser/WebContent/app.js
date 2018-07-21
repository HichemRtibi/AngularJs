/**
 * 
 */

var app = angular.module("Myapp", []);

app.filter("Myfilter", function() {
	return function(input, option) {
		if (isNaN(option) || option == "") {
			return input;
		} else {
			return input.substr(0, option).toUpperCase();

		}

	}

})

app.controller("usercontroller", function($scope) {
	$scope.users = [ {
		name : 'hichem',
		age : 20,
		prenom : 'rtibi'
	}, {
		name : 'salem',
		age : 20,
		prenom : 'yahyaoui'
	}, {
		name : 'nadia',
		age : 33,
		prenom : 'bouazi'
	}, {
		name : 'salim',
		age : 25,
		prenom : 'omri'
	}, {
		name : 'ragheb',
		age : 29,
		prenom : 'alama'
	}, {
		name : 'nancy',
		age : 23,
		prenom : 'ajrem'
	}, {
		name : 'hichem',
		age : 20,
		prenom : 'najlawi'
	}, {
		name : 'khaled',
		age : 20,
		prenom : 'omrani'
	}, {
		name : 'najwa',
		age : 20,
		prenom : 'boubakri'
	}, ];

});