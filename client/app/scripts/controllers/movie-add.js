'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieAddCtrl', function ($scope, Movie, $location) {
    $scope.movie = {};
    $scope.saveMovie = function () {
      if ($scope.movie) {
        Movie.post($scope.movie).then(function () {
          $location.path('/movies');
        });
      }
      else{
        console.log(' fields are empty');
      }
    };
  });
