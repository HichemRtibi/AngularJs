/**
 * 
 */

var app = angular.module("Myapp", []);

app.controller("usercontroller", function($scope) {

	$scope.joueurs = [ {
		name : 'cristiano ronaldo',
		age : 30,
		equipe : 'barcelone',
		img : 'img/11.jpg'
	}, {
		name : 'messi',
		age : 32,
		equipe : 'real madrid',
		img : 'img/2.jpg'
	}, {
		name : 'harry kayen',
		age : 20,
		equipe : 'tottenham',
		img : 'img/3.jpg'
	}, {
		name : 'luca modric',
		age : 30,
		equipe : 'real madrid',
		img : 'img/4.jpg'
	} ]

});