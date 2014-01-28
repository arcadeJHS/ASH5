/* Modules */
angular.module('app.controllers', []);

/* AngularJS app configuration */
var app = angular.module('app', [
	'ngRoute',
	'app.controllers'
])
.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {controller: 'HomeController', templateUrl: 'linker/js/angular/templates/home.html'})	
		.when('/tags', {controller: 'TagsController', templateUrl: 'linker/js/angular/templates/tags.html'})
		.otherwise({redirectTo: '/'});

	// Enable HTML5 History API, avoiding "hashbang mode" (avoiding display '#' on url)
    // Also add the following lines in "index.html", head section:
    // <base href="/" />
    // <meta name="fragment" content="!" />
    $locationProvider.html5Mode(true);
});