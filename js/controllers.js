'use strict';

var app = angular.module('ProductsApp');

app.controller('editmodeController', ['$scope', function($scope) {
    var ctrl = this;
    
    ctrl.save = function () {
        $scope.$parent.main.data.visible = false;
    };
    
}]);

app.controller('ProductCtrl', [ '$scope', 'Product',  ($scope, Product) => {
    $scope.products = Product.query();

    $scope.insert = function(name) {
        $scope.products.push({name: name});
    };

    $scope.delete = function(index) {
        $scope.products.splice(index, 1);  
    };
}]);