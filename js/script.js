/*  Created by Théo Lambert on 22/12/2018.
Copyright © 2017 Théo Lambert. All rights reserved. */

var app = angular.module('route', ['ngRoute']);
  app.config(function ($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html'
	})
	.when('/clip', {
		templateUrl: 'partials/clip.html'
	})
	.when('/teaser', {
		templateUrl: 'partials/teaser.html'
	})
	.when('/motion', {
		templateUrl: 'partials/motion.html'
	})
	.when('/contact', {
		templateUrl: 'partials/contact.html'
	})
	.when('/jeu', {
		templateUrl: 'partials/jeu.html'
	})

	.otherwise({
		templateUrl : 'partials/404.html'
	})
});

/*  Created by Théo Lambert on 22/12/2018.
Copyright © 2017 Théo Lambert. All rights reserved. */
