'use strict';

/**
 * @ngdoc function
 * @name isabelApp.controller:ModaCtrl
 * @description
 * # ModaCtrl
 * Controller of the isabelApp
 */
angular.module('isabelApp')
  .controller('ModaCtrl', function () {
    


   function genBrick() {
    var height = (Math.random() * 500) + 100;
    height = Math.floor(height);

    var id = (Math.random() * 10000);
    id = Math.floor(id);

    return {
        src: 'http://lorempixel.com/people/280/' + height + '/?' + id
    };
}

    this.bricks = [
    genBrick(),
    genBrick(),
    genBrick(),
    genBrick(),
    genBrick(),
    genBrick(),
    genBrick()
    ];






  });
