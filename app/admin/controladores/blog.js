'use strict';

/**
 * @ngdoc function
 * @name isabelApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the isabelApp
 */
 angular.module('AdminApp')
 .controller('BlogController', ['blog' , 'categoriaBlog' , '$routeParams' , '$window', '$scope' , 'Lightbox' ,  function (blog , categoriaBlog  , $routeParams , $window , $scope , Lightbox) {

    this.home = 'blog';

    this.blogs = blog.query();
    this.categoriasBlog = categoriaBlog.query();
    this.blog = new blog();



    this.crear = function(){

        console.log(this.blog);
        this.blog.$save();
        $window.location.href = '#/blog';

    }

    this.actualizar = function(){
        console.log(this.blog);
        $scope.uploader.flow.opts.target = '/api/blog/file/upload'; 
        $scope.uploader.flow.opts.query  = this.blog ; 
        $scope.uploader.flow.upload(); 

        this.blog.$update();
        $window.location.href = '#/blog';
    }

    this.eliminar = function(){
        console.log(this.blog);
        this.blog.$delete();
        $window.location.href = '#/blog';
    }



    /// instanciadores 
    this.cargarBlog = function(){
        this.blog = blog.get({id:$routeParams.id});
        console.log("get id " +  $routeParams.id);
        console.log(this.blog.imagenes); 
    }

    this.newBlog = function(){
       this.blog = new blog(); 
   }

     $scope.imageStrings = [];
     $scope.uploader = {};
     this.imagenes = [];
     blog.archivos = []; 




      $scope.processFiles = function(files){

        blog.archivos.push(files); 
        console.log(  blog.archivos); 



        angular.forEach(files, function(flowFile, i){



           var fileReader = new FileReader();
              fileReader.onload = function (event) {
                var uri = event.target.result;

                  $scope.imageStrings[i] = uri;


              };
              fileReader.readAsDataURL(flowFile.file);

        });


  };


   $scope.openLightboxModal = function (index) {
    Lightbox.openModal(this.blog.imagenes, index);
  };



}]);
