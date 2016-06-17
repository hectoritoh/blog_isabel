'use strict';

/**
 * @ngdoc function
 * @name isabelApp.controller:VerCtrl
 * @description
 * # VerCtrl
 * Controller of the isabelApp
 */
 angular.module('isabelApp')
 .controller('VerCtrl', ['$http' , '$routeParams' , '$scope' , function ($http , $routeParams, $scope) {


    $scope.categorias = [];



 $http.get('http://127.0.0.1/AdminICH/web/app_dev.php/api/categorias').
    success(function(data, status, headers, config) {
        $scope.categorias = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });


 	$scope.noticia = []; 

 	$http.get('http://127.0.0.1/AdminICH/web/app_dev.php/api/noticia/' + $routeParams.post).
 	success(function(data, status, headers, config) {
 		$scope.noticia = data;
 	}).
 	error(function(data, status, headers, config) {
      // log error
  });



 }]);
