angular.module( 'app.about', [
  'ngRoute',
  'ui.bootstrap'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'about/about.tpl.html',
        controller: 'AboutCtrl'
      });
  }])
.controller( 'AboutCtrl', ['$scope', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
 /* $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];*/
}])

;
