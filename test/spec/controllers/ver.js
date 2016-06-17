'use strict';

describe('Controller: VerCtrl', function () {

  // load the controller's module
  beforeEach(module('isabelApp'));

  var VerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerCtrl = $controller('VerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VerCtrl.awesomeThings.length).toBe(3);
  });
});
