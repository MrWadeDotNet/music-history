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
    'q': '../bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
        exports: 'Firebase'
    }
  }
});


requirejs(
        ["jquery","hbs","get-songs", "dom-access", "get-songs-more", "bootstrap","firebase","lodash","q","populate-songs","authentication"],
        function($, Handlebars, getSongs, domAccess, getMoreSongs, bootstrap, _firebase, _lodash,Q,addSongs,auth) {
//Detect if the user is already logged in 
        var ref = new Firebase("https://radiant-heat-7929.firebaseio.com");
        var authData = ref.getAuth();
        console.log("Auth Data", authData);
        //If no token key on the authData object authenticate with github

        if (authData === null) {
          ref.authWithOAuthPopup("github", function(error, authData) { 
            if (error) { 
              console.log("Login failed!", error);
            } else { 
              console.log("Authenicated Successfully", authData);
              auth.setUid(authData.uid);
                 }
                });
            } else { 
              //User logged in successfully
              auth.setUid(authData.uid);
                    }



                //grabs current user from authenication.js getUid function
          var currentUser = auth.getUid();

          var myFirebaseRef = new Firebase("https://radiant-heat-7929.firebaseio.com");

          myFirebaseRef.child("songs").orderByChild("uid").equalTo(currentUser).on("value", function(snapshot) {
            console.log(snapshot.val());  
            
            var songs = snapshot.val();
            var allSongsArray = [];

            for (var key in songs) {
              allSongsArray[allSongsArray.length] = songs[key];
            }
           
        var artists = _.chain(allSongsArray).uniq("artist").pluck("artist").value();
        console.log(artists);
        var albums = _.chain(allSongsArray).uniq("album").pluck("album").value();


displaySongs(allSongsArray);


              });


          function displaySongs(data) {


            console.log(data);            
            require(['hbs!../templates/songs'], function(songTemplate){
              $('.song_container').html(songTemplate({songs : data} ));
            });
             
          }

          function populateDropDowns() {
            require(['hbs!../templates/dropdownpopulate'], function(songTemplate){
  
              });


          }

  //Promises start retrieving songs 
    var first_list_of_songs = getSongs();

    var all_songs = [];

 

    first_list_of_songs.then(function (first_songs){
        console.log(first_songs.songs);
        for (var i=0; i < first_songs.songs.length; i++) {
            all_songs.push(first_songs.songs[i]);
            }
   console.log("First", all_songs);
        return getMoreSongs();
   

    })
    .then(function(second_songs){ 
       console.log(second_songs);
        for(var i=0; i < second_songs.songs.length; i++) {
            all_songs.push(second_songs.songs[i]);
        }
    console.log("Second", all_songs);
    })
    .fail()
    .done();


//end Promises and retreiving songs 


// Add Songs to Firebase


$('#submitsongs').click(function () {
  var newSong = {};
  newSong.title = $("#inputTitle").val();
  newSong.artist = $("#inputArtist").val();
  newSong.genre = $("inputGenre").val();
  newSong.album = $("#inputAlbum").val();
  newSong.uid = auth.getUid();
  addSongs(newSong);
})

/*
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
*/
     });
