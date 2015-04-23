var app = angular.module('rtfmApp', ['firebase', 'ngRoute']); 

app.controller('loginCtrl', function($scope){
	var username = $scope.username; 
	
	$scope.logMeIn = function(username){
		console.log($scope.username); 
		alert($scope.username); 
	}
})