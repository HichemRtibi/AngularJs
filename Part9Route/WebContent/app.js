/**
 * 
 */

var app = angular.module("Myapp", [ 'ngRoute' ]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "views/home.html",
		controller : 'HomeCtrl'
	}).when("/about", {
		templateUrl : "views/about.html",
		controller : "AboutCtrl"
	}).when("/contact", {
		templateUrl : "views/contact.html",
		controller : "ContactCtrl"
	}).when("/profile/:name", {
		
		templateUrl: "views/profile.html",
		controller: "profileCtrl"
	})
	
	
	.otherwise({
		redirectTo : "/"
	})

});