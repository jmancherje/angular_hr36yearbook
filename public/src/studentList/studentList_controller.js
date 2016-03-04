angular.module('app.studentList', [])

.controller('StudentListController',['$scope', '$http', function($scope, $http) {
  $scope.currentPage = 1;
  $scope.pageSize = 5;
  $scope.students = [];
  $http.get('/students')
    .success(function(students) {
      $scope.students = students;
    });
}]);