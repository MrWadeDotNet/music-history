/*s

define(function() {
  return {
    querySongs: function(callback) {
      $.ajax({
      url: "https://radiant-heat-7929.firebaseio.com/.json"
      }).done(function(data) {
        callback.call(this, data.songs);
      });
    }
  };
});
*/
