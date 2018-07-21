/**
 * 
 */

var app = angular.module("Myapp", [ 'ui.bootstrap' ]);

app.filter("paginate", function() {
	return function(arr, currentPage, pageSize) {
		try {
			return arr.slice((currentPage - 1) * pageSize, currentPage
					* pageSize)
		} catch (e) {
			return arr;
		}

	}
})
app.controller("Ctrl", function($scope) {
	$scope.currentPage = 1;
	$scope.pageSize = 4;
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
	}, {
		name : 'khaled',
		age : 20,
		prenom : 'omrani'
	}, {
		name : 'khaled',
		age : 20,
		prenom : 'omrani'
	}, {
		name : 'khaled',
		age : 20,
		prenom : 'omrani'
	}, {
		name : 'khaled',
		age : 20,
		prenom : 'omrani'
	}, {
		name : 'khaled',
		age : 20,
		prenom : 'omrani'
	}, {
		name : 'khaled',
		age : 20,
		prenom : 'omrani'
	}, {
		name : 'khaled',
		age : 20,
		prenom : 'omrani'
	}, {
		name : 'khaled',
		age : 20,
		prenom : 'omrani'
	}, {
		name : 'khaled',
		age : 20,
		prenom : 'omrani'
	} ];

});