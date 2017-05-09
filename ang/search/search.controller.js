(function () {

    angular.module('app').controller('SearchController', SearchController);

    SearchController.$inject = ['$location', 'AuthenticationService', '$rootScope', 'FlashService', 'UniversalService', '$scope', '$sce', '$window'];
    function SearchController($location, AuthenticationService, $rootScope, FlashService, UniversalService, $scope, $sce, $window) {
        var vm = this;
        vm.Artists = [];
        vm.Albums = [];
        vm.Songs = [];
        
        search();

        function search() {    
            var Results = UniversalService.SearchObject($window.localStorage.keyword).then(function (object) { 
                vm.Artists = object.Results[0];                
                vm.Albums = object.Results[1];                             
                vm.Songs = object.Results[2];            
            });
        }

        $rootScope.GlobalSearch = function() {
            var Results = UniversalService.SearchObject($window.localStorage.keyword).then(function (object) { 
                debugger;
                vm.Artists = object.Results[0];                
                vm.Albums = object.Results[1];                             
                vm.Songs = object.Results[2];  
                var url = "http://localhost:8080/music-sp/ang/#!/genre";
                $window.location.href = url;  
                var url = "http://localhost:8080/music-sp/ang/#!/search";
                $window.location.href = url;          
            });
        }

        $scope.GetThumbnail = function(Url) {
            if(Url != null){
              if (Url.indexOf("&") !=-1) {
                    Url = Url.substr(0,Url.indexOf('&'));
                }
                var video_id = Url.split('v=')[1];
                if (video_id.length == 11) {
                    var imgSource = '//img.youtube.com/vi/'+video_id+'/0.jpg';
                    $rootScope.img = imgSource;
                }
            }     
            return $rootScope.img;
        }    
    }    
})();
