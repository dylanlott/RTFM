var app = angular.module('rtfmApp', ['firebase', 'ngRoute']); 

app.constant('fb', {
	url: 'https://boiling-inferno-8769.firebaseio.com/'
})

app.config(function ($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'loginCtrl'
	})
	.otherwise('/login')
})
