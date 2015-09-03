
define(['angular'],function(angular){


var app = angular.module("MusicApp", ['angular','ngRoute']);

console.log(app);


function config($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: 'partials/song-list.html',
          controller: 'SongCtrl'
        });
    }

    config.$inject=['$routeProvider'];

    return config;



});





/*

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
        }).
        otherwise({
        redirectTo: '/'
      });
      when('/songs/new', {
        templateUrl: 'partials/song-form.html',
        controller: 'SongFormCtrl'
      }).
      when('/songs/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl'
      }). 

  }]);

});*/