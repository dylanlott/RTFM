angular.module('rtfmApp')
  .controller('ThreadsCtrl', function($scope, threadRef, $firebaseObject, commentsRef) {
    var thread = $firebaseObject(threadRef);

    thread.$bindTo($scope, 'thread');

    $scope.comments = $firebaseArray(commentsRef); 

    $scope.createComment = function(username, text){
    	$scope.comments.$add({
    		username: username, 
    		text: text
    	});
    }
  });
