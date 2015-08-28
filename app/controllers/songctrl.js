app.controller("SongCtrl", ["$scope", "$firebaseObject", function($scope, $firebaseObject) {
  $scope.title = "Song Controller";
 // $scope.searchSongs = "";


  //executes getSongList function and creates variable songs with value of the JSON object
 /* get_songs
     .then(function(objectFromJSONFile) {
        $scope.songs = objectFromJSONFile;
     }, function(error){
         console.log("Error", error);
     });
*/

var ref = new Firebase("https://radiant-heat-7929.firebaseio.com/songs");
/*
 // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");*/

$scope.songs = $firebaseObject(ref);  


  $scope.killSong = function(songs) {
    var songsIndex = $scope.songs.indexOf(songs);
    if (songsIndex >= 0) {
    $scope.songs.splice(songsIndex, 1);
    }
  };
/*
  $scope.addSong = function() {
    $scope.songs.push({
      name: $scope.newSong,
      album: $scope.newAlbum,
      arist: $scope.newArtist 
    });
    
    $scope.newSong = "";
    $scope.newAlbum = "";
    $scope.newArtist = "";
  };



  $scope.addSongs = function() {
    $scope.songs.push({
      name: $scope.newSongs.name,
      album: $scope.newSongs.album,
      artist: $scope.newSongs.artist
    });
    
    $scope.newSongs = "";
  };
*/
}]);
  