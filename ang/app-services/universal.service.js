(function () {

    angular.module('app').factory('UniversalService', UniversalService);

    UniversalService.$inject = ['$http', '$q', '$location', 'FlashService', '$window', '$rootScope'];
    function UniversalService($http, $q, $location, FlashService, $window, $rootScope) {
        var service = {};
        var vm = this;

        service.GenreId = null;
        service.ArtistId = null;
        service.AlbumId = null;  

        
        service.UpdateGenreId = UpdateGenreId;
        service.UpdateArtistId = UpdateArtistId;
        service.UpdateAlbumId = UpdateAlbumId;
        service.GetAllGenres = GetAllGenres;
        service.GetAllArtistsByGenreId = GetAllArtistsByGenreId;
        service.GetAllAlbumsByArtistId = GetAllAlbumsByArtistId;
        service.GetAllSongsByAlbumId = GetAllSongsByAlbumId;
        service.GetOneSongById = GetOneSongById;
        service.AddToPlaylist = AddToPlaylist;
        service.GetPlaylistsByUserName = GetPlaylistsByUserName;
        service.GoToGenrebbz = GoToGenrebbz;
        service.PostSong = PostSong;
        service.SearchObject = SearchObject;
        service.Search = Search;
        service.GetNewAlbums = GetNewAlbums;
        service.GetArtistById = GetArtistById;
        service.GetAlbumById = GetAlbumById;
        service.GetGenreById = GetGenreById;

        return service;
        function GoToGenrebbz() {
            debugger;
            $location.path();
            $location.path('/genre');
        }

        function Search(input) {
            debugger;
            $window.localStorage.setItem("keyword", input);
            var test = $window.localStorage.keyword;
            console.log(input);
            var url = "http://localhost:8080/music-sp/ang/#!/search";
            if( $location.path() != "/search") {
                $window.location.href = url;
            }
            else {
                debugger;
                $window.localStorage.setItem("keyword", input);
                $rootScope.GlobalSearch();
            }
        }



        function UpdateGenreId(id) {
            service.GenreId = id;
            console.log(service.GenreId);
            $location.path('/artist');
        }

        function UpdateArtistId(id) {
            
            service.ArtistId = id;
            console.log(service.ArtistId);
            $location.path('/album');
        }

        function UpdateAlbumId(id) {
            service.AlbumId = id;
            console.log(service.AlbumId);
            $location.path('/song');    
        }

        function GetNewAlbums()
        {
            var promise = $http.get('http://localhost:60792/api/newalbums/', {cache: false}).then(function(response){
            return response.data;
            });
        return promise;
        }
    
        function GetGenreById(Id){
            debugger;
            if(Id == undefined) {
                Id = service.GenreId;
            }
            var promise = $http.get('http://localhost:60792/api/genrebyid/' + Id, {cache: false}).then(function(response){
            return response.data;
            });
        return promise;
        }


        function GetAllGenres(){
        	debugger;
            var promise = $http.get('http://localhost:60792/api/allgenres/', {cache: false}).then(function(response){
            return response.data;
            });
        return promise;

        }
        function SearchObject(keyword)
        {
            debugger;
            
            var promise = $http.get('http://localhost:60792/api/search/' + keyword, {cache: false}).then(function(response){
            return response.data;
            });
        return promise;
        }

        function GetAllArtistsByGenreId(){

            console.log(service.GenreId);
            var promise = $http.get('http://localhost:60792/api/allartists/' + service.GenreId, {cache: false}).then(function(response){
            return response.data;
            });
        return promise;
        }

        function GetArtistById(Id){
            debugger;
            if(Id == undefined) {
                Id = service.ArtistId;
            }
            var promise = $http.get('http://localhost:60792/api/artistbyid/' + Id, {cache: false}).then(function(response){
            return response.data;
            });
        return promise;
        }

        function GetAlbumById(Id) {
            debugger;
            if(Id == undefined) {
                Id = service.AlbumId;
            }
            var promise = $http.get('http://localhost:60792/api/albumbyid/' + Id, {cache: false}).then(function(response){
            return response.data;
            });
        return promise;
        }


        function GetAllAlbumsByArtistId(){
            debugger;
           //// PostSong("dfadf");
           // console.log(service.ArtistId);
            var promise = $http.get('http://localhost:60792/api/allalbums/' + service.ArtistId, {cache: false}).then(function(response){
            return response.data;
            });
        return promise;

        }

        function GetAllSongsByAlbumId(){

            var promise = $http.get('http://localhost:60792/api/allsongs/' + service.AlbumId, {cache: false}).then(function(response){
            return response.data;
            });
        return promise;

        }

        function GetOneSongById(id) {
            
            var promise = $http.get('http://localhost:60792/api/song/' + id, {cache: false}).then(function(response){
            return response.data;
            });
        return promise;
        }

        function PostSong(JSONObject) {

            $http.post('http://localhost:60792/api/song/', JSONObject).then();
        }




        function AddToPlaylist(playlist, songId) {

            var JSONObject= {  
                "Id":playlist,
                "SongId":songId
            };

            $http.post('http://localhost:60792/api/addtoplaylist/', JSONObject).then(handleSuccess("Success"), handleError('Error creating user'));
        }

        function GetPlaylistsByUserName(name) {
            
            var promise = $http.get('http://localhost:60792/api/playlistsbyowner/' + name, {cache: false}).then(function(response){
            return response.data;
            });
        return promise;
        }

        function GetVideoInfo(videoId){
            
        }
    }
})();
