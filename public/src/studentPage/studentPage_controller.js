angular.module('app.studentPage', [])

.controller('StudentPageController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.studentId = $routeParams.studentId;
}]);