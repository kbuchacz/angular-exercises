(function () {
    'use strict';
    
    function CandyDAO($resource) {
        var api = $resource('/api/candy/:a', null, {
          query: {method: 'GET'},
          get: {method: 'GET'},
          save: {method: 'POST'},
          remove: {method: 'DELETE'}
        });
        return {
          query: function() {
            return api.query().$promise;
          },
          get: function(id) {
            return api.get({a: id}).$promise;
          },
          save: function(object) {
            return api.save(object).$promise;
          },
          remove: function(id) {
            return api.delete({a: id}).$promise;
          }
        };
    }

    angular.module('exerciseApp').factory('CandyDAO', ['$resource', CandyDAO]);
})();
