var app = angular.module('ProductsApp');

app.controller('editmodeController', function($scope) {
    var ctrl = this;
    
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
    
    ctrl.save = function(){
        $scope.$parent.main.data.visible=false;
}
});
