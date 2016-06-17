'use strict';

/**
 * @ngdoc function
 * @name isabelApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the isabelApp
 */
 angular.module('isabelApp')
 .controller('BlogCtrl', [ '$scope', '$http' , function ($scope , $http) {

    $http.defaults.useXDomain = true;

    $scope.$on('$viewContentLoaded', function(){
        // console.log('cargado');
        // loading_screen.finish(); 
    });


    $scope.categorias = [];
    $scope.noticias   = [];
    $scope.selectedCategoria = "Home"


 $http.get('http://127.0.0.1/AdminICH/web/app_dev.php/api/categorias').
    success(function(data, status, headers, config) {
        $scope.categorias = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });



 $http.get('http://127.0.0.1/AdminICH/web/app_dev.php/api/noticias').
    success(function(data, status, headers, config) {
        $scope.noticias = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });



 




}]);
