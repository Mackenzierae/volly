console.log('Event Factory');
app.factory('eventFactory', ['$http', "$location", function($http, $location){
  var factory = {};

//   factory.newEvent = function(event, callback){
//   $http({
//     method: "POST",
//     url: "/newEvent",
//     data: question
//   }).then(function(res){
//     console.log("this is the new Event that gets back from the server:", res.data);
//     callback(res.data);
//   })
// }
//
//   factory.getevents = function(callback){
//     $http({
//       method:'get',
//       url: '/getevents',
//     }).then(function(returned_data){
//       callback(returned_data.data);
//     })
//   }
//
//   factory.getOneEvent = function(id, callback){
//     $http({
//       url: '/getOne/'+id,
//       method: 'GET'
//     }).then(function(event_data){
//       callback(event_data.data)
//     })
//   }
//
//   factory.delete = function(id, callback){
//     $http({
//       url: '/delete/'+id,
//       method: 'POST'
//     }).then(function(data){
//       callback(data.data)
//     })
//   }
// }

  return factory;
}]);
