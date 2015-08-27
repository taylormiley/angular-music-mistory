app.controller('SongDetailCtrl', 
  ["$scope",
   "$routeParams",
   "$q",
   "get-songs",

  function($scope, $routeParams, $q, getSongs) {
    $scope.itemId = $routeParams.itemId;
    $scope.correctSong = {};

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

    getSongs.then(
      function(songs) {
        $scope.correctSong = songs.filter(function(item) {
          return item.id === parseInt($scope.itemId);
        })[0];
        console.log("correctSong", $scope.correctSong);
        },function(error) {
          console.log("error", error);
      }
    );
  }
]);