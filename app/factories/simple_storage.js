app.factory("simple-storage", function() {
  var bucket = {};

  return {
    addJunk: function(key,value) {
      bucket[key] = value;
  },
  getJunk: function(junk) {
    if (bucket.hasOwnPropert(junk)) { 
      return bucket[junk];
      }
    }
  }
});