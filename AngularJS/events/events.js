var app = angular.module("myApp",[]);
app.controller("myCTRL", function($scope, $http){
  $scope.count = 0;
  $scope.addCount = function(){
    $scope.count = $scope.count + 1;
  }
  //------------------------------------
  $scope.testingDIV = false;
  //------------------------------------
  $scope.showDIV = function(){
    $scope.testingDIV = true;
  }
  //------------------------------------
  $scope.hideDIV = function(){
    $scope.testingDIV = false;
  }
  //------------------------------------
  $scope.text_button = "SHOW";

  $scope.actionDIV = function(){
    if($scope.testingDIV == false){
      $scope.testingDIV = true;
      $scope.text_button = "DONT SHOW!";
    }else{
      $scope.testingDIV = false;
      $scope.text_button = "SHOW!";
    }
  }
});
