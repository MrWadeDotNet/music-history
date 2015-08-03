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
        ["scripts/populate-songs.js","scripts/dom-access.js"],
        function(popSongs, domAccess) {

              $.ajax({
                  url: "scripts/music.json"
              }).done(function(data) {
                var html = populateSongs(data.songs);
                addSongsToTable(html);
              });


        });
