'use strict';

/**
 * @ngdoc overview
 * @name isabelApp
 * @description
 * # isabelApp
 *
 * Main module of the application.
 */
angular
  .module('isabelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'angularModalService',
    'angular-scroll-animate',
    'ngTouch',
    'angulike',
    'angularGrid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main'
      // })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      // .when('/conocenos', {
      //   templateUrl: 'views/conocenos.html',
      //   controller: 'ConocenosCtrl',
      //   controllerAs: 'conocenos'
      // })
      // .when('/servicios', {
      //   templateUrl: 'views/servicios.html',
      //   controller: 'ServiciosCtrl',
      //   controllerAs: 'servicios'
      // })
      // .when('/contactenos', {
      //   templateUrl: 'views/contactenos.html',
      //   controller: 'ContactenosCrtl',
      //   controllerAs: 'contactenos'
      // })
      // .when('/portafolio', {
      //   templateUrl: 'views/portafolio.html',
      //   controller: 'PortafolioCtrl',
      //   controllerAs: 'portafolio'
      // })
      .when('/', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/:categoria', {
        templateUrl: 'views/categoria.html',
        controller: 'CategoriaCtrl',
        controllerAs: 'categoria'
      })
      .when('/categoria/:post', {
        templateUrl: 'views/ver.html',
        controller: 'VerCtrl',
        controllerAs: 'post'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
