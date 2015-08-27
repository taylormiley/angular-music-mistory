app.controller("SongCtrl", 
  ["$scope",
   "$q",
   "get-songs",

  function($scope, $q, getSongs) {
  $scope.title = "ChiefDoogin";
  $scope.songs = [];
  $scope.searchText = "";
  $scope.artistSelector = "";
  $scope.albumSelector = "";

  // function getSongList() {
  //   return $q(function(resolve, reject) {
  //     $.ajax({
  //       url: "./data/Songs.json"
  //     })
  //     .done(function(response) {
  //       resolve(response.songs);
  //     })
  //     .fail(function(xhr, status, error) {
  //       reject(error);
  //     });
  //   });
  // }

  // function getMoreSongList() {
  //   return $q(function(resolve, reject) {
  //     $.ajax({
  //       url: "./data/More-songs.json"
  //     })
  //     .done(function(response) {
  //       resolve(response.songs);
  //     })
  //     .fail(function(xhr, status, error) {
  //       reject(error);
  //     });
  //   });
  // }

  getSongs.then(
    function(songs) {
      for (var item in songs) {
        $scope.songs.push(songs[item]);
    }
  },function(error) {
    console.log("error", error);
  });


  $scope.killSong = function(item) {
    var songIndex = $scope.songs.indexOf(item);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  $scope.addSong = function() {
    $scope.songs.push({"name": $scope.newSongName, "artist": $scope.newSongArtist, "album": $scope.newSongAlbum});
  };

}]);