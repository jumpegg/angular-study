'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  	'ngRoute',
	'myApp.ngModel',
	'myApp.ngShow',
	'myApp.ngSwitch',
	'myApp.ngOption',
	'myApp.ngIf',
	'myApp.ngRepeat',
	'myApp.ngClass',
  	'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/ngModel'});
}]);
