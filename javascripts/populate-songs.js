define(function() {
  return {
    querySongs: function(callback) {
      $.ajax({
      url: "./javascripts/music.json"
      }).done(function(data) {
        callback.call(this, data);
      });
    }
  };
});
