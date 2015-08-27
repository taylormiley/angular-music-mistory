app.factory("get-songs", function($q, $http) {
  function getSongList() {
    return $q(function(resolve, reject) {
      $http.get('./data/Songs.json')
      .success(
        function(objectFromJSONFile) {
          resolve(objectFromJSONFile.songs);
          console.log(objectFromJSONFile);
        },function(error) {
          reject(error);
        }
      );
    });
  }
  return getSongList();
});