console.log('Home Controller');
app.controller('homeController', ["$scope", "homeFactory", "$location", function($scope, homeFactory, $location){
  $scope.test="Home Controller is WORKING";
  ///////////////////////////////////////////////////////////////
  // LEAVE COMMENTED OUT TO AVOID LOGIN:
  ///////////////////////////////////////////////////////////////
  // loginFactory.getLoggedUser(function(logged_user_data){
  //   $scope.logged_user = logged_user_data;
  // })
  //
  // $scope.logout = function(){
  //   console.log('in logout function')
  //   loginFactory.logout(function(){
  //     $location.url('/');
  // })}
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////



}])
