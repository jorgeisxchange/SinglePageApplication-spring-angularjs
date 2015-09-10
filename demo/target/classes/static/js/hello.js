angular.module('hello', [ 'ngRoute', 'home', 'navigation']).config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'js/home/home.html',
		controller : 'home'
	}).otherwise('/');

});/*.controller('navigation',

function($rootScope, $scope, $http, $location, $route) {

	$scope.tab = function(route) {
		return $route.current && route === $route.current.controller;
	};

	var authenticate = function(callback) {

		$http.get('user').success(function(data) {
			if (data.name) {
				$rootScope.authenticated = true;
			} else {
				$rootScope.authenticated = false;
			}
			callback && callback();
		}).error(function() {
			$rootScope.authenticated = false;
			callback && callback();
		});

	};

	authenticate();

	$http.get('user/').success(function(data) {
		if (data.name) {
			$rootScope.authenticated = true;
		} else {
			$rootScope.authenticated = false;
		}
		//callback && callback();
	}).error(function() {
		$rootScope.authenticated = false;
		//callback && callback();
	});
	
	$scope.credentials = {};
	$scope.login = function() {
		console.log('login function');
		$http.post('login', $.param($scope.credentials), {
			headers : {
				"content-type" : "application/x-www-form-urlencoded"
			}
		}).success(function(data) {
			authenticate(function() {
				if ($rootScope.authenticated) {
					console.log("Login succeeded");
					$location.path("/");
					$scope.error = false;
					$rootScope.authenticated = true;
				} else {
					console.log("Login failed with redirect");
					$location.path("/login");
					$scope.error = true;
					$rootScope.authenticated = false;
				}
			});
		}).error(function(data) {
			console.log("Login failed");
			$location.path("/login");
			$scope.error = true;
			$rootScope.authenticated = false;
		});
	};

	$rootScope.logout = function() {
		console.log('logout function');
		$http.post('logout', {}).success(function() {
			$rootScope.authenticated = false;
			$location.path("/");
		}).error(function(data) {
			console.log("Logout failed");
			$rootScope.authenticated = false;
		});	
	};

}).controller('home', function($scope, $http) {
	console.log('home function');
	$http.get('http://localhost:9000').success(function(data) {
		$scope.greeting = data;
	});
	$http.get('resource/').success(function(data) {
		$scope.greeting = data;
	});
});
*/