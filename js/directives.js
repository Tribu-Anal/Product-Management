var app = angular.module('ProductsApp');
    
app.directive('inplaceEditing', function() {
    return {
        restrict: 'E',
        scope: {
            edit:'='
        },
        controller : 'editmodeController as editCtrl',
        template: "<div ng-show='edit.editMode'> <input type='text' id='{{edit.id}}'  ng-model='edit.name' ng-model-options='{ getterSetter: true }' ng-keypress='editCtrl.enterEvent($event)'></div>"
        
    }
});