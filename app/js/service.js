angular.module('newday.service', []).factory('ndAPI', function($http){

    var musicAPI = {};

    musicAPI.getMusic = function(){

        return $http({

           method: 'JSONP',
           url: 'http://stephen-wu.com/getMusic.php?callback=JSON_CALLBACK'

        });

    };

    musicAPI.getBand = function(){

        return $http({

            method: 'JSONP',
            url: 'http://stephen-wu.com/getMusic.php?callback=JSON_CALLBACK'

        });

    };

    return musicAPI;

});