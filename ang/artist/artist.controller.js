(function () {
    'use strict';

    angular.module('app').controller('ArtistController', ArtistController);

    ArtistController.$inject = ['$location', 'AuthenticationService', 'FlashService', 'UniversalService', '$scope'];
    function ArtistController($location, AuthenticationService, FlashService, UniversalService, $scope) {
        var vm = this;
        vm.allartists = [];
        vm.Genre = null;
         

        $scope.loadAlbums = function(artistId){
            UniversalService.UpdateArtistId(artistId);
        }

        loadAllArtists();
        function loadAllArtists() { 
        debugger; 
            vm.allartists = null;
            UniversalService.GetGenreById()
                .then(function (genre){
                    debugger;
                    vm.Genre = genre.Results;
                });


            
            UniversalService.GetAllArtistsByGenreId()
                .then(function (artist) {
                    debugger
                    vm.allartists = artist.Results;
                    
              });
        }

    }

})();
