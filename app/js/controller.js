var ndController = angular.module('newday.controllers', []);

ndController.

    controller('MusicController', function($scope, ndAPI){

        $scope.musicList = [];


        ndAPI.getMusic().success(function (res) {

           $scope.musicList = res;

        });

    }).

    controller('HomeController', function($scope){



    }).

    controller('BandController', function($scope){

        $scope.bandList = [];

        ndAPI.getBand().success(function (res){

            $scope.bandList = res;

        })

    });