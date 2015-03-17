angular.module('newday', [

    'newday.controllers',
    'newday.service',
    'ngRoute'

]).

config(['$routeProvider', function($routeProvider){

        $routeProvider.

            when("/home",{

                templateUrl: "views/home.html",
                controller: "HomeController"

            }).

            when("/upload", {

                templateUrl: "views/upload.html",
                controller: "UploadController"

            }).

            when("/music", {

                templateUrl: "views/music.html",
                controller: "MusicController"

            }).

            when("/bands", {

                templateUrl: "views/bands.html",
                controller: "BandController"

            }).

            when("/trending", {

                templateUrl: "views/trending.html",
                controller: "TrendingController"

            }).

            when("/contact", {

                templateUrl: "views/contact.html",
                controller: "ContactController"

            }).

            otherwise({

                redirectTo: '/home'

            });

    }]);