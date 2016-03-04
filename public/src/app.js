var app = angular.module('app', [
  'ngRoute',
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
      templateUrl: "./src/login/login_template.html"
    })
    .state('list', {
      url: "/list",
      templateUrl: './src/studentList/studentList_template.html'
    })
    .state('student', {
      url: '/student/:studentId',
      templateUrl: './src/studentPage/studentPage_template.html'
    })
});


var PaginationController = function($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

app.controller('PaginationController', PaginationController);