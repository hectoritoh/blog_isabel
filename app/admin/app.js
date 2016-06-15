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
 .module('AdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'angularTrix',
    'flow',
    'wysiwyg.module',
    'oc.lazyLoad',
    'bootstrapLightbox',
    'ngTouch'
    ])
 .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'admin/vistas/blog/list.html',
        controllerAs: 'main'
    })
    .when('/blog', {
        templateUrl: 'admin/vistas/blog/list.html',
        controller: 'BlogController',
        controllerAs: 'blog'
    })
    .when('/blog/:id/edit', {
        templateUrl: 'admin/vistas/blog/edit.html',
        controller: 'BlogController',
        controllerAs: 'blog'
    }).when('/blog/new', {
        templateUrl: 'admin/vistas/blog/new.html',
        controller: 'BlogController',
        controllerAs: 'blog'
    })

    .otherwise({
        redirectTo: '/'
    });
});