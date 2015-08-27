app.factory("get-songs", function($q, $http) {


function getSongList() { 

return $q(function(resolve,reject) { 


 $http.get('./data/songs.json')
 .success(
  function(data) {
    console.log(data);
    resolve(data.songs);
  },function(error){
  reject(error);
      });
    });
  }
  return getSongList();
});