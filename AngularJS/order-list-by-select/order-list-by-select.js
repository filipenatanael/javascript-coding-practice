var app = angular.module("myApp",[]);
app.controller("myCTRL", function($scope){
  $scope.options_array = [{name:'Name of person', v_value:'name'},
  {name:'Country from', v_value:'country'}];

  $scope.people = [
    {'name':'Clark Kent', 'country':'Canada'},
    {'name':'Bruce Wayne', 'country':'Brazil'},
    {'name':'AWonder Woman', 'country':'Japan'}
  ];
  
});
