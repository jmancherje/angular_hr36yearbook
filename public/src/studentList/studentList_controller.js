angular.module('app.studentList', [])

.controller('StudentListController',['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.currentPage = 1;
  $scope.pageSize = 5;
  $scope.students = [];
  $http.get('/students')
    .success(function(students) {
      $scope.students = students;
    });
}]);