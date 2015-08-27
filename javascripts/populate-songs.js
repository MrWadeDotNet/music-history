 /*define(function() {
  return {
    querySongs: function(callback) {
      $.ajax({
      url: "https://radiant-heat-7929.firebaseio.com/.json"
    }).done(function(data) {
       callback.call(this, data);
      });
    }
  };
});
*/  

  define(["jquery","q"], function($, Q) {

    
    return function(post_data) {
    var deferred = Q.defer();
    
    $.ajax({
        url: "https://radiant-heat-7929.firebaseio.com/songs.json",
        dataType: "JSON",
        type: 'POST',
        data: JSON.stringify(post_data),
    })
    .done(function(post_data) {
        deferred.resolve(post_data);
        console.log("Successfully posted data");
    })
    .fail(function(xhr, status, error) {
        deferred.reject(error);
    });

    return deferred.promise;

    }
    
  });
