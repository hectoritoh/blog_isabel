'use strict';

/**
 * @ngdoc function
 * @name isabelApp.controller:ConocenosctrlCtrl
 * @description
 * # ConocenosctrlCtrl
 * Controller of the isabelApp
 */
 angular.module('isabelApp')
 .controller('ConocenosCtrl', [ '$scope' , 'ModalService' ,  function ( $scope , ModalService) {

 	$scope.$on('$viewContentLoaded', function(){
 		console.log('cargado');
 		loading_screen.finish(); 
 	});


 	$scope.mostrarBiografia = function() {
 		ModalService.showModal({
 			templateUrl: "views/biografia.html",
 		}).then(function(modal) {

    //it's a bootstrap element, use 'modal' to show it
    modal.element.modal();
    modal.close.then(function(result) {
    	console.log(result);
    });
});
 	};



 }]);
