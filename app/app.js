var app = angular.module("SongApp", ["ngRoute", "angular.filter"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/songs/:itemId/', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl'
      }).
      otherwise({
        redirectTo: '/songs'
      });
  }]);