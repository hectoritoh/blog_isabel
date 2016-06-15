'use strict';

/**
 * @ngdoc function
 * @name isabelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the isabelApp
 */
 angular.module('isabelApp')
 .controller('MainCtrl', [ '$scope' ,  function (  $scope ) {

  $scope.$on('$viewContentLoaded', function(){
    console.log('cargado');
    loading_screen.finish(); 
  });



 $scope.animateElementIn = function($el) {
    $el.removeClass('col-md-8');
    $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
  };


 $scope.animateElementLeft = function($el) {
    $el.removeClass('hidden');
    $el.addClass('animated fadeInLeft'); // this example leverages animate.css classes
  };


 $scope.animateElementRight = function($el) {
    $el.removeClass('hidden');
    $el.addClass('animated fadeInRight'); // this example leverages animate.css classes
  };



 $scope.animateElementOut = function($el) {
    $el.addClass('hidden');
    $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
  };


 }]);
