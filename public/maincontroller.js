var myapp = angular.module('MyApp', []);

myapp.controller('MainController', function($scope, $http) {

  $scope.searchItem = '';

  $scope.searchUser = function() {
    $scope.searchItem = $scope.search
      //console.log($scope.searchItem);

    var _url = 'https://api.github.com/search/users?q=' + $scope.searchItem; //+ '+repos:%3E42+followers:%3E1000';

    try {
      $http({
        method: 'GET',
        url: _url,
      }).then(function successCallback(response) {
        console.log(response.data);

        $scope.user = $scope.searchItem;
        $scope.items = response.data.items;
        $scope.avatar = response.data.items[0].avatar_url;
        console.log(response.data.items[0].avatar_url);


      }, function errorCallback(response) {
        console.log("this didn't work!");
      });
    } catch (e) {
      console.log(e);
    }
  }


});
