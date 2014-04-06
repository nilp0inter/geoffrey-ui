angular.module( 'app.users', [
  'ngRoute',
  'ui.bootstrap'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'users/users.tpl.html',
        controller: 'UserCtrl'
      });
  }])
.controller( 'UserCtrl', ['$scope', function AboutCtrl( $scope ) {
  $scope.users = [{
    "name":"pepe",
    "surname":"gotera",
    "address":"C/MAnoteras 2",
    "postalCode":28080
  },{
    "name":"maria",
    "surname":"gutierrez",
    "address":"C/calandria 2",
    "postalCode":28081
  },{
    "name":"juan",
    "surname":"garcia",
    "address":"C/segovia 22",
    "postalCode":28082
  }];

  $scope.allSelected = false;

  $scope.updateAllSelected = function(value){
   
    for(var i = 0; i< $scope.users.length; i++){
      $scope.users[i].isSelected = value;
    }
    
  };

  $scope.fullName = function(user){
    return user.name+" " + user.surname;
  };

  $scope.deleteUser = function(user){
    for(var i = 0; i < $scope.users.length; i++){
      if($scope.users[i].name == user.name){
        break;
      }
    }
    $scope.users.splice(i,1);
  };

  $scope.userEdit = {};

  $scope.updateUserEdit= function(user){
    if(user.isSelected){
      $scope.userEdit = user;
    }else{
      $scope.userEdit= {};
    }
  };
}])

;
