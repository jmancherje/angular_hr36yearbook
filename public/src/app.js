var app = angular.module('app', [
  'ngRoute',
  'app.login',
  'app.studentList',
  'app.studentPage'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: './src/login/login_template.html',
      controller: 'LoginController'
    })
    .when('/list', {
      templateUrl: './src/studentList/studentList_template.html',
      controller: 'StudentListController'
    })
    .when('/student/:studentId', {
      templateUrl: './src/studentPage/studentPage_template.html',
      controller: 'StudentPageController'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);