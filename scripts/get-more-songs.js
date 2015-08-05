
define(function() {
  return {
    querySongs: function(callback) {
      $.ajax({
      url: "./javascripts/songs-2.json"
      }).done(function(data) {
        callback.call(this, data.songs);
      });
    }
  };
});
