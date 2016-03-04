var Login = angular.module('app.login', []);

Login.controller('LoginController', ['$scope', '$location', function($scope, $location) {
  console.log('login controller loaded');

  $scope.login = function(event) {
    $location.path('/list');
  }

  $scope.change = function() {
    console.log($scope.username);
  }

}]);