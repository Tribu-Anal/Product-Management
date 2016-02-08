'use strict';

var app = angular.module('ProductsApp');

app.controller('editmodeController', ['$scope', function($scope) {
    var ctrl = this;
    
    ctrl.enterEvent = function(event) {
            if (event.which === 13){
                $scope.$parent.product.editMode = false; 
            }
    };
}]);

app.controller('ProductCtrl', [ '$scope', 'Product', ($scope, Product) => {
    $scope.products = Product.query( () => {
        
        let genId = () => {
          let pIds = [];
            
          for (var i = 0; i < $scope.products.length; i++)  
              pIds.push($scope.products[i].id);
            
          return Math.max.apply(null, pIds)+1;
        };
        
        $scope.insert = function(name) {
            $scope.products.push( { id: $scope.products.length > 0 ? genId() : 1, name: name } );
            
            $scope.name = "";
        };
        
        $scope.updateProduct = (name, $index) => {
            $scope.products[$index].name = name;
        };
    });
    
    $scope.showPrompt = false;
    $scope.editMode = false;
    
    $scope.saveProducts = () => {
        Product.save($scope.products);
    };

    $scope.delete = function(index) {
        $scope.products.splice(index, 1);  
    };
    
    $scope.edit=function(producto){
        producto.editMode = true;
    };
}]);