var app = angular.module("myApp",[]);
app.controller("myCTRL", function($scope){
  //$scope.orderinigFor = "country";
  $scope.people = [
    {'name':'Clark Kent', 'country':'Canada'},
    {'name':'Bruce Wayne', 'country':'Brazil'},
    {'name':'AWonder Woman', 'country':'Japan'}
  ];

});

/*
  {{player.name | uppercase}} is {{player.character | lowercase}}

  <div ng-app="myApp" ng-controller="myCTRL">
  <input type="text" ng-model="FilterFor"/>
    <ul>
      <li ng-repeat="name in names | filter:FilterFor"> {{ name }} </li>
    </ul>
   </div>

<script type="text/javascript">
  var app = angular.module("myApp",[]);
    app.controller("myCTRL", function($scope){
    $scope.FilterFor = "Bruce";
    $scope.names = ["Bruce Wayne", "Clark Kent", "Wonder Woman"];
});

*/
