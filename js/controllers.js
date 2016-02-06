var app = angular.module('ProductsApp');

app.controller('ProductCtrl', function($scope) {
    $scope.products = [];
    
    $scope.insert = function(name) {
        $scope.products.push({name: name});
    };
    
    $scope.delete = function(index) {
      $scope.products.splice(index, 1);  
    };
});