/**
 * Created by bastiaansmis on 22/01/15.
 */

'use strict';

angular.module('muzeApp')
 .controller('EventCtrl',function($scope, eventUrl, $http){

    $scope.events = [];

    $scope.getProducts = function(){
      $http.get(eventUrl)
        .success(function(data){
          $scope.events = data;
        })
    }

    $scope.getProducts();

  });
