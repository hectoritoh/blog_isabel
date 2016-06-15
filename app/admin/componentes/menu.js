'use strict';

/**
 * @ngdoc function
 * @name isabelApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the isabelApp
 */
angular.module('AdminApp')
  .controller('MenuCtrl', [ '$scope' ,  function ($scope) {



  	$scope.selected = 'home';

  	$scope.menuItems = [
  		{  id:'blog'  , titulo: 'Blog' , url:'blog' , icon: 'icono1'},
  		{  id:'home2' , titulo: 'menu2' , url:'/1' , icon: 'icono2'},
  		{  id:'home3' , titulo: 'menu3' , url:'/2' , icon: 'icono3'},
  		{  id:'home4' , titulo: 'menu4' , url:'/3' , icon: 'icono4'},
  	];


  }]);
