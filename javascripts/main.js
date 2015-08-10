// Instead of AJAX should be a call back function in populate-songs.js
//



requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash' : '../bower_components/lodash/lodash',
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
        exports: 'Firebase'
    }
  }
});


requirejs(
        ["jquery","hbs","populate-songs", "dom-access", "get-more-songs", "bootstrap","firebase","lodash"],
        function($, Handlebars, popSongs, domAccess, getMoreSongs, bootstrap, _firebase, _lodash) {
          /*popSongs.querySongs(function(data) {
            require(['hbs!../templates/songs'], function(songTemplate){
              $('.song_container').html(songTemplate(data));
            });
          }); */

          var myFirebaseRef = new Firebase("https://radiant-heat-7929.firebaseio.com");

          myFirebaseRef.child("songs").on("value", function(snapshot) {
            console.log(snapshot.val());  
            
            var songs = snapshot.val();
            var allSongsArray = [];

            for (var key in songs) {
              allSongsArray[allSongsArray.length] = songs[key];
            }
           
        var artists = _.chain(allSongsArray).uniq("artist").pluck("artist").value();
        var albums = _.chain(allSongsArray).uniq("album").pluck("album").value();


displaySongs(allSongsArray);


              });


          function displaySongs(data) {


            console.log(data);            
            require(['hbs!../templates/songs'], function(songTemplate){
              $('.song_container').html(songTemplate({songs : data} ));
            });
             
          }






// Add Songs to Firebase
          $(function(){

            $('#submitsongs').click(function(){
             //$('#container').append('<img src = "img/ajax/ajax-loader.gif" alt="Currently loading" id = "loading" />');
                      var newSong = {};
                      newSong.title = $("#inputTitle").val();
                      newSong.artist = $("#inputArtist").val();
                      newSong.album = $("#inputAlbum").val();
                      newSong.genre = $("inputGenre").val();
                  console.log(newSong);
            $.ajax({
                    url: 'https://radiant-heat-7929.firebaseio.com/songs.json',
                    dataType: "JSON",
                    type: 'POST',
                    data: JSON.stringify(newSong),
                    success: function(result){
                         // $('#response').remove();
                        // $('#container').append('<p id = "response">' + result + '</p>');
                        // $('#loading').fadeOut(500);

                       }
                    });
                  });
         });

     });
