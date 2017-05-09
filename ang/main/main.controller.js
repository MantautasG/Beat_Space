(function () {
    'use strict';

    angular.module('app').controller('MainController', MainController);

    MainController.$inject = ['$location', 'AuthenticationService', 'FlashService', 'UniversalService', '$scope'];
    function MainController($location, AuthenticationService, FlashService, UniversalService, $scope) {
        var vm = this;

        vm.newalbums = [];
        vm.bigalbum = null;
        vm.artist = null;
       


        $scope.loadSongs = function(albumId){
            debugger;
            UniversalService.UpdateAlbumId(albumId);

        }

        loadNewAlbums();

      
        function loadNewAlbums() {  	
            UniversalService.GetNewAlbums()
                .then(function (albums) {
                    debugger;
                    vm.bigalbum = albums.Results[0];   
                    albums.Results.shift();
                    vm.newalbums = albums.Results;
                    getArtsistInfo(vm.bigalbum.ArtistId);
                });
        }
        function getArtsistInfo(Id) {
            UniversalService.GetArtistById(Id)
                .then(function (artist) {
                    debugger;
                    vm.artist = artist.Results;
                });
        }
    }

})();
