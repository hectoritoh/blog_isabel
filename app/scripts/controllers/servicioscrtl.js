'use strict';

/**
 * @ngdoc function
 * @name isabelApp.controller:ServicioscrtlCtrl
 * @description
 * # ServicioscrtlCtrl
 * Controller of the isabelApp
 */
 angular.module('isabelApp')
 .controller('ServiciosCtrl',[ '$scope'  ,  function ($scope ) {


  $scope.$on('$viewContentLoaded', function(){
    console.log('cargado');
    loading_screen.finish(); 
  });




  this.asesoria = [
  {
    nombre:'Make Up' , 
    imagen:'assets/imagenes/servicios/makeup.jpeg' , 
    descripcion:'Desde Cleopatra hasta las técnicas modernas, a lo largo de la historia han variado las formas de embellecer el rostro. Partiendo de esto les puedo compartir las técnicas y procesos que colaboran a su concepto a la hora de elegir el makeup apropiado.  <br/><br/> <ul><li>NOVIAS</li><li>REINAS DE BELLEZA </li><li>MAQUILLAJE BASICO</li><li>CONTORNO DE ROSTRO</li></ul>   '
  } , 
  {
    nombre:'Asesoría capilar' , 
    imagen:'assets/imagenes/servicios/capilar.png' , 
    descripcion:'<ul><li>Cuidados</li><li>Cortes</li><li>Estilos</li><li>Look ideal</li></ul>'
  } , 
  {
    nombre:'Estética Corporal' , 
    imagen:'assets/imagenes/servicios/asesoria_imagen.jpg' , 
    descripcion:' La estética corporal la conforman muchos procedimientos destinados a realzar el cuerpo y lograr satisfacer algunas de nuestras exigencias, algunos de ellos son:'+
    '<br/><br/>'+
    '<ul><li>Cirugía plástica: </li><li>Medicina estética: </li><li>Depilación definitiva</li><li>Dermatología</li><li>Cosmiatría</li><li>Nutriologo</li><li>Entrenador Personal</li></ul>'
  } 

  ];


  this.imagen = [
  {
    nombre:'Colorimetría' , 
    imagen:'assets/imagenes/servicios/makeup.jpeg' , 
    descripcion:'Desde Cleopatra hasta las técnicas modernas, a lo largo de la historia han variado las formas de embellecer el rostro. Partiendo de esto les puedo compartir las técnicas y procesos que colaboran a su concepto a la hora de elegir el makeup apropiado.  <br/><br/> <ul><li>NOVIAS</li><li>REINAS DE BELLEZA </li><li>MAQUILLAJE BASICO</li><li>CONTORNO DE ROSTRO</li></ul>   '
  }, 
  {
    nombre:'Tipos de cuerpos' , 
    imagen:'assets/imagenes/servicios/capilar.png' , 
    descripcion:'<ul><li>Cuidados</li><li>Cortes</li><li>Estilos</li><li>Look ideal</li></ul>'
  },
  {
    nombre:'Couching' , 
    imagen:'assets/imagenes/servicios/capilar.png' , 
    descripcion:'<ul><li>Cuidados</li><li>Cortes</li><li>Estilos</li><li>Look ideal</li></ul>'
  }, 
  {
    nombre:'Personal shopper' , 
    imagen:'assets/imagenes/servicios/capilar.png' , 
    descripcion:'<ul><li>Cuidados</li><li>Cortes</li><li>Estilos</li><li>Look ideal</li></ul>'
  }, 
  {
    nombre:'Marketing personal' , 
    imagen:'assets/imagenes/servicios/capilar.png' , 
    descripcion:'<ul><li>Cuidados</li><li>Cortes</li><li>Estilos</li><li>Look ideal</li></ul>'
  }

  ];


  this.disenadora = [
  {
    nombre:'Trajes de baño ' , 
    imagen:'assets/imagenes/servicios/makeup.jpeg' , 
    descripcion:'Desde Cleopatra hasta las técnicas modernas, a lo largo de la historia han variado las formas de embellecer el rostro. Partiendo de esto les puedo compartir las técnicas y procesos que colaboran a su concepto a la hora de elegir el makeup apropiado.  <br/><br/> <ul><li>NOVIAS</li><li>REINAS DE BELLEZA </li><li>MAQUILLAJE BASICO</li><li>CONTORNO DE ROSTRO</li></ul>   '
  }, 
  {
    nombre:'Accesorios ' , 
    imagen:'assets/imagenes/servicios/capilar.png' , 
    descripcion:'<ul><li>Cuidados</li><li>Cortes</li><li>Estilos</li><li>Look ideal</li></ul>'
  },
  {
    nombre:'Ropa ' , 
    imagen:'assets/imagenes/servicios/capilar.png' , 
    descripcion:'<ul><li>Cuidados</li><li>Cortes</li><li>Estilos</li><li>Look ideal</li></ul>'
  }, 
  {
    nombre:'Bolsas ' , 
    imagen:'assets/imagenes/servicios/capilar.png' , 
    descripcion:'<ul><li>Cuidados</li><li>Cortes</li><li>Estilos</li><li>Look ideal</li></ul>'
  }

  ];



  this.currentServicios = 'Imagen'; 
  this.servicio =  this.asesoria[0]; 



  this.setCosmetologia = function(){
    this.currentServicios = 'Maquillaje';     	
  };



  this.setImagen = function(){
    this.currentServicios = 'Imagen';     	
  };

  this.setCabello = function(){
    this.currentServicios = 'Cabello';     	
  };

  this.setConsultoria = function(){
    this.currentServicios = 'Consultoria';     	
  };


  this.setTratamientoFacial = function(){
    this.currentServicios = 'Tratamiento Facial';     	
  };


  this.setLimpiezaCutis = function(){
    this.currentServicios = 'Limpieza Cutis';     	
  };

  this.setConsultoria = function(){
    this.currentServicios = 'Consultoria';     	
  };



}]);
