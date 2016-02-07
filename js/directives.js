var app = angular.module('ProductsApp');
    
app.directive('inplaceEditing', function() {
    return {
        restrict: 'E',
        scope: {
            edit:'='
        },
        controller : 'inplaceEditing as value',
        template: "<div ng-show='edit.visible'> <input type='text'  ng-model='edit.name' ng-model-options='{ getterSetter: true }' autofocus> <input type='button' ng-click='value.save()' value='Save'></div>"
    }
});