var ndService = angular.module('newday.service', [])

ndService.factory('ndAPI', function($http){

    var musicAPI = {};

    musicAPI.getMusic= function(){

        return $http({

           method: 'JSONP',
           url: 'http://stephen-wu.com/getMusic.php'

        });

    }

    return musicAPI;

});