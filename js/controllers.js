var app = angular.module('ProductsApp');

app.controller('ProductController', function($scope) {    
    $scope.products = 
        [
            {id: 1, name: "Nintendo Wii U"},
            {id: 2, name: "PS4"}
        ];
    
    $scope.insert = function(name) {
        $scope.products.push({name: name});
    };
    
    $scope.delete = function(index) {
      $scope.products.splice(index, 1);  
    };
});

app.controller('editmodeController',['$scope',function($scope){
    var ctrl = this;
    ctrl.save = function(){
        $scope.$parent.main.data.visible=false;
    }
}]);