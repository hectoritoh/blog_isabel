'use strict';

/**
 * @ngdoc service
 * @name isabelApp.blog
 * @description
 * # blog
 * Service in the isabelApp.
 */


angular.module('isabelApp').factory('categoriaBlog', ['$resource',
  function($resource){
    return $resource('api/categoriaBlog/:id', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);