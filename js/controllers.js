(function() {
    var app =angular.module('ProductsApp');
    app.controller('editmodeController',['$scope',function($scope){
        var ctrl = this;
        ctrl.save = function(){
            $scope.$parent.main.data.visible=false;
        }
    }]);    
})();

