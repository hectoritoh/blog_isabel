'use strict';

/**
 * @ngdoc function
 * @name isabelApp.controller:PortafolioCtrl
 * @description
 * # PortafolioCtrl
 * Controller of the isabelApp
 */
angular.module('isabelApp')
  .controller('PortafolioCtrl', function () {


   function genBrick() {
    var height = (Math.random() * 400) + 100;
    height = Math.floor(height);

    var id = (Math.random() * 10000);
    id = Math.floor(id);

    return {
        src: 'http://lorempixel.com/g/280/' + height + '/?' + id
    };
}

    this.bricks = [
    genBrick(),
    genBrick(),
    genBrick(),
    genBrick(),
    genBrick(),
    genBrick(),
    genBrick(),
    genBrick(),
    genBrick()
    ];




  });
