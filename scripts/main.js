// Instead of AJAX should be a call back function in populate-songs.js
//
/*


requirejs(
  [“dom-access", "populate-songs", "get-more-songs"],
  function(domAccess, pop, get_more) {

    pop.querySongs(function(data) {
      console.log("data", data);
    });
    get_more.querySongs(function(data) {
      console.log("data", data);
    });
  }
);

*/

requirejs(
        ["javascripts/populate-songs.js","javascripts/dom-access.js"],
        function(popSongs, domAccess) {

              $.ajax({
                  url: "http://localhost/workspace/music-history-5/javascripts/music.json"
              }).done(function(data) {
                var html = populateSongs(data.songs);
                addSongsToTable(html);
              });


        });
