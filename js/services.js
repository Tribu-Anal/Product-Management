var app = angular.module('ProductsApp');

//Temporary url
var url = 'http://localhost:8080/api';

app.factory('Product', ($resource) => {
    return $resource(url, {} , {
        save: { method: "POST", isArray: true }
    });
});