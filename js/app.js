var MyApp = angular.module("MyApp", []);

MyApp.controller("ProductsCtrl", function($scope, $http) {
  $http.get('products.json').
    success(function(response) {
      $scope.products = response;
    });

    $scope.removeRow = function(id){        
    	var index = -1; 	
	  	var productsArray = eval( $scope.products );
		for( var i = 0; i < productsArray.length; i++ ) {
			if( productsArray[i].id === id ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}  
      $scope.products.splice( index, 1 );    
  };
});