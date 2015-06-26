var MyApp = angular.module("MyApp", []);

MyApp.controller("ProductsCtrl", function($scope, $http) {
  $http.get('products.json').
    success(function(response) {
      $scope.products = response;
    });

    $scope.removeRow = function(id){        
      var index = -1;   
      $scope.products.splice( index, 1 );    
  };
});