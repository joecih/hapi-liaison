var myapp = angular.module('MyApp', []);

myapp.controller('MainController', function($scope, $http) {

  $scope.searchUser = function() {

    console.log($scope.search);

    if ($scope.search !== undefined) {
      var _url = 'https://api.github.com/search/users?q=' + $scope.search; //+ '+repos:%3E42+followers:%3E1000';

      try {
        $http({
          method: 'GET',
          url: _url,
        }).then(function successCallback(response) {
          console.log(response.data.items.length);

          if (response.data.items.length <= 0) {
            alertMessage('[ WARNING ] : Your input value is not a valid user name');
          } else {

            //$scope.user = $scope.searchItem;
            $scope.items = response.data.items;
            //$scope.avatar = response.data.items[0].avatar_url;
            //console.log(response.data.items[0].avatar_url);

          }

        }, function errorCallback(response) {
          console.log("this didn't work!");
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      // Some error control here.
      alertMessage("[ WARNING ] : You did not enter any text in the input field!");
    }
  }

  function alertMessage(_message) {
    alert(_message);
  }

});
