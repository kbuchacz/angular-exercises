(function () {
    'use strict';

    function ProductDAO($resource) {
        var api = $resource('/api/product/:a', null, {
            query: {method: 'GET', isArray: false },
            add: {method: 'PUT', params: {a: 'new'}, isArray: false}
        });
        return {
            query: function () {
                console.log("query!");
                return api.query().$promise;
            },
            get: function (id){
                console.log("get!");
                return api.get({a: id}).$promise;
            },
            save: function(product) {
                console.log("save!");
                return api.save(product).$promise;
            },
            remove: function(id){
                console.log("remove!");
                return api.remove({a: id}).$promise;
            },
            add: function(product){
                console.log("add!");
                return api.add(product).$promise;
            }

        };
    }

    angular.module('exerciseApp').factory('ProductDAO', ['$resource', ProductDAO]);
})();
