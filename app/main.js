require.config({
  baseUrl: './app',
  paths: {
      'angular' : '../lib/bower_components/angular/angular',
      'ngRoute': '../lib/bower_components/angular-route/angular-route',
      'ngResource': '../lib/bower_components/angular-resource/angular-resource',
      'jquery': '../lib/bower_components/jquery/dist/jquery.min',
      'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
      'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
      'firebase': '../lib/bower_components/firebase/firebase',
      'q': '../lib/bower_components/q/q',
      'app': 'app'
  },

  shim: {
    'bootstrap': ['jquery'],
    'ngRoute': {
        exports: 'ngRoute',
        deps: ['angular'] 
      },
    'ngResource': ['angular'],
    'firebase': {
        exports: 'Firebase'
    },
  angular: {
          exports : 'angular'
      },
      ngResource: {
          deps: ['angular'],
          exports: 'angular'
      }

  }


      


});

require(['angular','app','ngRoute'], function (angular, app) {
  var AppRoot = angular.element(document.getElementById('MusicApp'));
    AppRoot.attr('ng-controller','SongCtrl');
   angular.bootstrap(document, ['MusicApp']);
  

});