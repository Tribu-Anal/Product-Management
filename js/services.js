var app = angular.module('ProductsApp');

app.factory('Product', ($resource) => {
    return $resource('../res/products.json'); //Temporary resource
});