var app = angular.module("myApp",[]);
app.controller("myCTRL", function($scope, $http){
  $scope.html = "Nothing to show!";
  
  $http.get('Page_1.html').then(function(response){
    $scope.html = response.data;
  });
  //----------------------------------------------
  $scope.people = [];

  $http.get('http://www.testing.com/webserver/users-data.php').then(function(response){
    //{"result":[{"name":"Bruce","year":"18"}]}
    $scope.html = response.data.result;
  });

});
