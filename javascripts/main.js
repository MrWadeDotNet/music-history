// Instead of AJAX should be a call back function in populate-songs.js
//



requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});


requirejs(
        ["jquery", "hbs", "populate-songs", "dom-access", "get-more-songs"],
        function($,Handlebars, popSongs, domAccess, getMoreSongs) {
          popSongs.querySongs(function(data) {
            require(['hbs!../templates/songs'], function(songTemplate){
              $('.song_container').html(songTemplate(data));
            });

          });
        }
      )





          // console.log("asking InitialSongs");
          // initialSongs.querySongs(function(songs) {
          //   console.log("songs array sent back fro module: ". songs);
          //
          //   console.log("Now binding the song array to theHandlebar template");
          //   require(['hbs!../templates/songs'], function(songTemplate) {
          //     $("#songList").html(songTemplate(songs));
          //
          //   });
          // });
