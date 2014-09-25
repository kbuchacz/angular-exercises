/**
 * Created by jbeynar on 9/3/14.
 *
 * Artist DAO factory
 */
angular.module('ngselect2App').factory('Artist',['$resource',function($resource){
    var ws_url = 'http://musicbrainz.org/ws/2/artist?fmt=json&limit=3&query=artist\::name';
    var artist = $resource(ws_url,{name: '@name'},{
        get: {method: 'GET'}
    });
    return {
        get: function(param) {
            return artist.get({name: param}).$promise;
        }
    };
}]);