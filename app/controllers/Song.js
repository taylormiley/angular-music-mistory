app.controller("SongCtrl", function($scope, $q) {
  $scope.title = "Welcome to your song list";

  function getSongList() {
    return $q(function(resolve, reject) {
      $.ajax({
        url: "./data/Songs.json"
      })
      .done(function(response) {
        resolve(response.songs);
      })
      .fail(function(xhr, status, error) {
        reject(error);
      });
    });
  }

  getSongList()
  .then(function(promiseResolutionData) {
    $scope.songs = promiseResolutionData;
  },function(error) {
    console.log("error", error);
  });

  $scope.killSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  $scope.addSong = function() {
    $scope.songs.push({"name": $scope.newSongName, "artist": $scope.newSongArtist, "album": $scope.newSongAlbum});
  };

});