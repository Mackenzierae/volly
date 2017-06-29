console.log('Event Controller');
app.controller('eventController', ["$scope", "eventFactory", "$location", function($scope, eventFactory, $location){
  $scope.test="Event Controller is WORKING";

  var test2 = "variable test"

}])
