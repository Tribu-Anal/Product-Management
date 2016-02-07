'use strict';

var app = angular.module('ProductsApp');

app.controller('editmodeController', ['$scope', function($scope) {
    var ctrl = this;
    
    ctrl.save = function () {
        $scope.$parent.main.data.visible = false;
    };
    
}]);

app.controller('ProductCtrl', [ '$scope', 'Product', '$http',  ($scope, Product, $http) => {
    $scope.products = Product.query( () => {
        
        let genId = () => {
          let pIds = [];
            
          for (var i = 0; i < $scope.products.length; i++)  
              pIds.push($scope.products[i].id);
            
          return Math.max.apply(null, pIds)+1;
        };
        
        $scope.insert = function(name) {
            $scope.products.push( { id: $scope.products.length > 0 ? genId() : 1, name: name } );
        };
    });
    
    $scope.showPrompt = false;
    
    $scope.saveProducts = () => {
        Product.save($scope.products);
    };

    $scope.delete = function(index) {
        $scope.products.splice(index, 1);  
    };
}]);