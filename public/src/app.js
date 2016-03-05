var app = angular.module('app', [
  'ui.router',
  'app.login',
  'app.studentList',
  'app.studentPage',
  'angularUtils.directives.dirPagination'
]);


app.config(function($stateProvider, $urlRouterProvider){
  // default route
  $urlRouterProvider.otherwise('/login')

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "./src/login/login_template.html",
      controller: "LoginController"
    })
    .state('list', {
      // TODO: utilize this :pageNumber
      url: "/list/:pageNumber",
      templateUrl: './src/studentList/studentList_template.html',
      controller: "StudentListController"
    })
    .state('student', {
      url: '/student/:studentId',
      templateUrl: './src/studentPage/studentPage_template.html',
      controller: "StudentPageController"
    })
});


var PaginationController = function($scope, $location) {
  $scope.pageChangeHandler = function(newPageNumber) {
    console.log('going to page ' + newPageNumber);
    $location.url('/list/' + newPageNumber);
  };
}

app.controller('PaginationController', PaginationController);