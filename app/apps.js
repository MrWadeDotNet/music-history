var app = angular.module("MusicApp", ['ngRoute']);

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
    /*  when('/songs/new', {
        templateUrl: 'partials/song-form.html',
        controller: 'SongFormCtrl'
      }).
      when('/songs/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl'
      }). */

  }]);