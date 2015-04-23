var app = angular.module('rtfmApp', ['firebase', 'ngRoute']); 

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'loginCtrl'
	})

	.when('/threads', {
		templateUrl: 'templates/threads.html'
	})

	.when('/threads/:threadId', {
		//code 
	})

	.otherwise({ redirectTo: '/templates/login.html' })
}])
