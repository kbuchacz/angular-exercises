(function () {
    'use strict';
    function PostDetailsCtrl(PostDAO, $routeParams) {
      this.details = {};
      
      var detailsScope = this;
      PostDAO.get($routeParams.id).then(function(data) {
        detailsScope.details = data;
      });

    }

    var module = angular.module("exerciseApp");
    module.controller('PostDetailsCtrl', ['PostDAO', '$routeParams',PostDetailsCtrl]);
})();
