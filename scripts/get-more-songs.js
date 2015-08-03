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
