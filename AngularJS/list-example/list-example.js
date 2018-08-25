var app = angular.module("myApp",[]);
app.controller("myCTRL", function($scope){

  $scope.list = ["Iten 1","Iten 2","Iten 3","Iten 4","Iten 5"];
  $scope.alert = '';

  $scope.addItem = function(){
    $scope.alert = '';
    if($scope.addText != ''){
      if($scope.list.indexOf($scope.addText) == -1){
        $scope.list.push($scope.addText);
      }else{
        $scope.alert = 'This item is already added!';
      }
    }
    $scope.addText = '';
  }

  $scope.removerItem = function(item){
    $scope.alert = '';
    $scope.list.splice(item, 1);
  }
});
