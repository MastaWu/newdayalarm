angular.module('newday', [

    'newday.controllers',
    'newday.service',
    'ngRoute'

]).

config(['$routeProvider', function($routeProvider){

        $routeProvider.

            when("/music", {

                templateUrl: "views/music.html",
                controller: "MusicController"

            }).

            when("/home",{

                templateUrl: "views/home.html",
                controller: "HomeController"

            }).

            otherwise({

                redirectTo: '/home'

            });

    }]);