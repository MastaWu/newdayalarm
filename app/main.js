angular.modules('newday', [

    'newday.controllers'

]).

config(['$routeProvider', function($routeProvider){

        $routeProvider.
            when("/music", {

                templateUrl: "views/music.html", controller: "musicController"

            }).
            otherwise({redirectTo: '/music'});

    }]);