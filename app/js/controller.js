var ndController = angular.module('newday.controllers', []);

ndController.controller('MusicController', function($scope, ndAPI){

    ndAPI.getMusic().success(function(res){

       $scope.music = res;

    });

});