var app = angular.module('app', ['ngRoute']);

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
app.factory('loginInterceptor',['$q','$location',function($q, $location){
 return{
  'responseError': function(rejection){
   if (rejection.status == 401){
         $location.url('/login');
   }
   return $q.reject(rejection);
  }
 }
}])
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


app.config(function ($routeProvider, $httpProvider){
////////////////////////////////////////////////////////////
/////// COMMENT OUT LINE BELOW TO IGNORE LOGIN:

  // $httpProvider.interceptors.push('loginInterceptor');

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
  $routeProvider
  .when('/',{
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/home',{
    templateUrl: 'partials/home.html',
    controller: 'homeController'
  })
  .when('/event',{
    templateUrl: 'partials/event.html',
    controller: 'eventController'
  })

  // .when('/event/:id',{
  // templateUrl: 'partials/event.html',
  // controller: 'eventController'
  // })
  .otherwise({
    redirectTo: '/'
  })

})
