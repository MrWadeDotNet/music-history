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
        ["jquery","hbs","populate-songs","dom-access"],
        function(popSongs, domAccess) {

              $.ajax({
                  url: "javascripts/music.json"
              }).done(function(data) {
                var html = populateSongs(data.songs);
                addSongsToTable(html);
              });


        });
