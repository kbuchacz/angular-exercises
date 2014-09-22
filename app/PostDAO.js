(function () {
    'use strict';

    function PostDAO($resource) {
        var api = $resource('/api/post', null, {
          get: {method: 'GET'}
        });
        return {
            query: function () {
                return api.query().$promise;
            }
        };
    }

    angular.module('exerciseApp').factory('PostDAO', ['$resource', PostDAO]);
})();
