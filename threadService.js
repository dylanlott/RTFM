//threadService 
var app = angular.module('rtfmApp'); 

app.service('ThreadService', function(fb) {
	var firebaseRef = new Firebase("https://boiling-inferno-8769.firebaseio.com/")

	this.getThreads = function(fb){
		return new Firebase(fb.url)
	}

	this.getThread = function(threadId){
		return new Firebase(fb.url + '/threads/' + threadID)
	}

	this.getComments = function(threadId){
		return $firebase(new Firebase(firebaseUrl + '/threads' + threadId + '/comments'));
	}
})

