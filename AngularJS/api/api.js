var app = angular.module("myApp",[]);
app.controller("myCTRL", function($scope){
  /*
  - The scope is the binding part between the HTML (view) and the JavaScript (controller).
  - The scope is an object with the available properties and methods.
  - The scope is available for both the view and the controller.
  */
  $scope.text_Upper = '';
  $scope.run = function(){
    $scope.text_Upper = angular.uppercase($scope.text_field);
  }
  //---------------------------------------------------------
  $scope.result = '';
  $scope.any_value = "TEST";

  if(angular.isString($scope.any_value)){
    $scope.result = "Yeah! this value is an string!";
  }else{
    $scope.result = "Nooh! this value is not an string!";
  }
});
