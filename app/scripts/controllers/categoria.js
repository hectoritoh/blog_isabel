'use strict';

/**
 * @ngdoc function
 * @name isabelApp.controller:CategoriaCtrl
 * @description
 * # CategoriaCtrl
 * Controller of the isabelApp
 */
angular.module('isabelApp')
  .controller('CategoriaCtrl', [ '$scope', '$http' , '$routeParams' , function ($scope , $http ,  $routeParams) {



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



 $http.get('http://127.0.0.1/AdminICH/web/app_dev.php/api/noticias/' + $routeParams.categoria).
    success(function(data, status, headers, config) {
        $scope.noticias = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });





  }]);
