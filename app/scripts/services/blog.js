'use strict';

/**
 * @ngdoc service
 * @name isabelApp.blog
 * @description
 * # blog
 * Service in the isabelApp.
 */


 angular.module('isabelApp').factory('blog', ['$resource',
 	function($resource){
 		return $resource('api/blog/:id', { id: '@_id' }, {
 			query: {method:'GET', isArray:true},
 			update: {
 				method: 'PUT',headers: {enctype:'multipart/form-data'}
 			}
 		});
 	}]);