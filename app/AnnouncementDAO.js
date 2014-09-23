(function () {
    'use strict';

    function AnnouncementDAO($resource) {
      var api = $resource('/api/announcement', null, {
        get: {method: 'GET'}
      });
      
      return {
        query: function() {
          return api.query().$promise;
        }
      };
    }

    angular.module('exerciseApp').factory('AnnouncementDAO', ['$resource', AnnouncementDAO]);
})();
