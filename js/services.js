var app = angular.module('ProductsApp');

app.factory('Product', ($resource) => {
    return $resource('http://localhost:8080/api'); //Temporary url
});