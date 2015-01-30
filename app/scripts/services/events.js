/**
 * Created by bastiaansmis on 22/01/15.
 */

'use strict';

angular.module('muzeApp.services',[
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'])
  .constant('eventUrl','http://localhost:5500/events/')
  .factory('Event', function($scope, $http, $resource, eventUrl){

    $scope.eventsResource = $resource(eventUrl + ':id',{id: '@id'});

    var events = $scope.eventsResource.query();

    var Event = {
      all: events
    };

    return Event;
  });
