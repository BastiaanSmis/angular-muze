'use strict';

/**
 * @ngdoc overview
 * @name muzeApp
 * @description
 * # muzeApp
 *
 * Main module of the application.
 */
var app = angular
  .module('muzeApp', [
    'muzeApp.services',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventCtrl'
      })
      .when('/',{
        redirectTo: '/events'
      });
  });
