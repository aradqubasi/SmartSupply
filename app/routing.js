'use strict';

// Declare app level module which depends on views, and components
angular.module('smartSupply', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/login', {templateUrl: "views/login/login.template.html"})
      .when('/system-status', {templateUrl: "views/system-status/system-status.template.html"})
      .when('/user-management', {templateUrl: "views/user-management/user-management.template.html"})
      .otherwise({redirectTo: '/index.html'});
}]);
