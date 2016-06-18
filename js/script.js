var app = angular.module('app', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Main'
	})

	.when('/:ID', {
		templateUrl: myLocalized.partials + 'content.html',
		controller: 'Content'
	});
})

.controller('Main', function($scope, $http, $routeParams, $sce) {
	$http.get('/wp-ng/wp-json/wp/v2/posts').success(function(data){
		$scope.posts = data;

		angular.forEach($scope.posts, function(value, key) {
				// trust each title and excerpt in the object
				this[key].title.rendered = $sce.trustAsHtml(value.title.rendered);
			  this[key].excerpt.rendered = $sce.trustAsHtml(value.excerpt.rendered);
			}, $scope.posts);
	});
})

.controller('Content', function($scope, $http, $routeParams, $sce) {
	$http.get('/wp-ng/wp-json/wp/v2/posts/' + $routeParams.ID).success(function(res){
		$scope.post = res;
		$scope.post.content.rendered = $sce.trustAsHtml($scope.post.content.rendered);
	});	
});