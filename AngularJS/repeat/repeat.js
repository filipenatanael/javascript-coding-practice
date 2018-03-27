var app = angular.module("myApp",[]);
app.controller("myCTRL", function($scope){
  $scope.ingredients = ["Flour","Eggs","Chocolate"];

  $scope.players = [
    {'name':'Bruce Wayne', 'character':'Batman'},
    {'name':'Clark Kent/Kal-El', 'character':'Superman'},
    {'name':'Wonder Woman', 'character':'Diana Prince'}
  ];
  
});
