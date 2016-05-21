'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.mySlide='';
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function () {
      var newWidth = 1000 + slides.length + 1;
      slides.push({
        image: 'http://lorempixel.com/' + newWidth + '/300/abstract/Truc demo site',
        text: ['It is not too late to be a programmer', 'Be proactive', 'Begin with the end in mind',
          'Put first thing first'][slides.length % 4],
        id: currIndex++
      });
    };

    // create 4 slides
    for (var i = 0; i < 4; i++) {
      $scope.addSlide();
    }

    $scope.randomize = function () {
      var indexes = generateIndexesArray();
      assignNewIndexesToSlides(indexes);
    };



    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
      for (var i = 0, l = slides.length; i < l; i++) {
        slides[i].id = indexes.pop();
      }
    }

    function generateIndexesArray() {
      var indexes = [];
      for (var i = 0; i < currIndex; ++i) {
        indexes[i] = i;
      }
      return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
      var tmp, current, top = array.length;

      if (top) {
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      }

      return array;
    }
  });
