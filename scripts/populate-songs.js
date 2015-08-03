/* "More Songs"
define(function() {
  return {
    querySongs: function(callback) {
      $.ajax({
        url: "./javascripts/more-songs.json"
      }).done(function(data) {
        callback.call(this, data.songs);
      });
    }
  };
});
*/




function populateSongs(songs) {
  var songString = "";
  songs.forEach(function (song) {
    songString += "<h1 class='song-name'>" + song.title + "</h1>";
    songString += "<ul><li><h2>" + song.artist + "</li></h2>";
    songString += "<br>";
    songString += "<li><h3>" + song.album + "</h3></li>";
    songString += "<br></ul>";
  });

  return songString;
}
