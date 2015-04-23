var app = angular.module('rtfmApp', ['firebase', 'ngRoute']); 

app.constant('fb', {
	url: 'https://boiling-inferno-8769.firebaseio.com/'
})

app.config(function ($routeProvider, $route, $routeParams) {
	$routeProvider

	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'loginCtrl'
	})

	.when('/threads', {
		templateUrl: 'threads/threads.html', 
		controller: 'threadsCtrl',
		resolve: {
			threadsRef: function(ThreadService){
				return ThreadService.getThreads(); 
			}
		}
	})

	.when('thread/:threadId', {
  		templateUrl: 'threads/threads.html',
  		controller: 'threadsCtrl',
  		resolve: {
    		threadRef: function (ThreadService, $route) {
      		return ThreadService.getThread($route.current.params.threadId);
    		},
    		commentsRef: function(ThreadService, $route){
    			return ThreadService.getComments($route.current.params.threadId); 
    		}
  		}
	})

	/* commented out for debugging
	.when('/threads/:threadId', {
		templateUrl: 
		controller: 
	})
	*/

	.otherwise('/login')
})
