//define(function (require) {
   
//   var angular = require('angular'),
     var Controllers = angular.module('controllers', []);
   
  Controllers.controller('angapiController', ['$scope', '$http', function($scope, $http){
function resetItem(){
   $scope.myapi = {
      name : '',
      email : '',
      id : ''
   };             
   $scope.displayForm = '';
   
}
resetItem();
 
 $scope.addItem = function () {
   resetItem();
   $scope.displayForm = true;
 }
 
 
$scope.saveItem = function () {
  var emp = $scope.myapi;
      if (emp.id.length == 0){
            $http.get('/myapi/create?name=' + emp.name + '&email=' +  emp.email).success(function(data) {
              $scope.items.push(data);
              $scope.displayForm = '';
              removeModal();
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });
          }
          else{
            $http.get('/myapi/update/'+ emp.id +'?name=' + emp.name + '&email=' +  emp.email ).success(function(data) {
              $scope.displayForm = '';
              removeModal();
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });
          }
        };
 
$scope.editItem = function (data) {      
        $scope.myapi = data;
        $scope.displayForm = true;
}
 
        $scope.removeItem = function (data) {
          if (confirm('Do you really want to delete?')){
            $http['delete']('/myapi/' + data.id).success(function() {
              $scope.items.splice($scope.items.indexOf(data), 1);
            });
          }
        };
 
        $http.get('/myapi/find').success(function(data) {
          for (var i = 0; i < data.length; i++) {
            data[i].index = i;
          }
          $scope.items = data;
        });
 
        function removeModal(){
          $('.modal').modal('hide');         
      }
 
    

    
  }]);

      
 
   
//});