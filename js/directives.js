var app = angular.module('ProductsApp');
    
app.directive('inplaceEditing', function() {
    return {
        restrict: 'E',
        scope: {
            edit:'='
        },
        controller : 'editmodeController as editCtrl',
        template: "<div ng-show='edit.editMode'> <input type='text'  ng-model='edit.name' ng-model-options='{ getterSetter: true }' autofocus> <input type='button' ng-click='editCtrl.save()' value='Save'></div>"
    }
});