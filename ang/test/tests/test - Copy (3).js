const controller=require('C:/wamp64/www/music-sp/ang/genre/genre.controller.js');

/*describe( 'GenreController',function(){
var scope, controller;
beforeEach(function() {
  module('app');
});

});*/


describe('GenreController', function() {
  beforeEach(module('app'));

  var $controller, $scope, $modal, Point;
  var $controller, $scope, $location, AuthenticationService, FlashService, UniversalService;

  beforeEach(inject(function(_$controller_, _$rootScope_, _$location_, _AuthenticationService_, _FlashService_, _UniversalService_){
    $scope = $rootScope.$new();
    $location_ = _$location_;
    AuthenticationService = _AuthenticationService_;
    FlashService=_FlashService_;
    UniversalService=_UniversalService_;

    spyOn($location_, 'method');
    spyOn(AuthenticationService, 'method');
    spyOn(FlashService, 'method');
    spyOn(UniversalService, 'method');

    $controller = _$controller_('GenreController', { $scope: $scope, $location: $location, AuthenticationService: AuthenticationService, FlashService:FlashService,UniversalService:UniversalService });
  }));

  /*describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      $scope.label = '12345';
      $scope.addNewPoint();
      expect($scope.label).toEqual(null);
    });
  });*/
});
