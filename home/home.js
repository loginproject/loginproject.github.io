'use strict';
angular.module('myApp.home', ['ngRoute','firebase'])

//Declared route
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
//Home Controller
.controller('HomeCtrl', ['$scope','$firebaseSimpleLogin',function($scope, $firebaseSimpleLogin){
     var firebaseObj = new Firebase("https://sizzling-heat-8866.firebaseio.com/");
    var loginObj = $firebaseSimpleLogin(firebaseObj);
    
    $scope.user={};
    $scope.SignIn = function(){
        var username = $scope.user.email;
        var password = $scope.user.password;
        
        loginObj.$login('password',{
            email: username,
            password: password
        })
        .then(function(user){
            alert('Auth sucess');
        })
            .catch(function(error){
            alert("Auth fail");
        });
    };
   
}]);