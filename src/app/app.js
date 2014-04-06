angular.module( 'app', [
  'ngRoute',
  'templates-app',
  'templates-common',
  'app.home',
  'app.about',
  'app.users'
]);

angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
 $locationProvider
  .html5Mode(true)
  .hashPrefix('!');
  $routeProvider.otherwise({redirectTo:'/home'});
}])

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  /*$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });*/
})

;

