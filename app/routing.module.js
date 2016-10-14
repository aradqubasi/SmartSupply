'use strict';

// Declare app level module which depends on view, and components
angular.module('smartSupply.routing', [
  'ngRoute',
  'smartSupply.view',
  'smartSupply.userList'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/login', {templateUrl: "view/login/login.template.html"})
      .when('/system-status', {templateUrl: "view/system-status/system-status.template.html"})
      .when('/user-management', {templateUrl: "view/user-management/user-management.template.html"})
      .otherwise({redirectTo: '/index.html'});
}]);