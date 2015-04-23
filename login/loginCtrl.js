var app = angular.module('rtfmApp'); 

app.controller('loginCtrl', function($scope, $location, userService){
	var username = $scope.username; 
	
	$scope.logMeIn = function(username){
		console.log($scope.username); 
	}

	/*
	$scope.apply(function(){
		$location.path('/dashboard/' + user.uid)
	})
	*/
})