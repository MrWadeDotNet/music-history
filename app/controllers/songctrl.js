app.controller("SongCtrl", ["$scope", "get-songs", function($scope, get_songs) {
  $scope.title = "Song Controller";
 // $scope.searchSongs = "";


  //executes getSongList function and creates variable songs with value of the JSON object
  get_songs
     .then(function(objectFromJSONFile) {
        $scope.songs = objectFromJSONFile;
     }, function(error){
         console.log("Error", error);
     });

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
  