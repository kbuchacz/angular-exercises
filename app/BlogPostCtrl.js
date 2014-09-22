(function () {
    'use strict';
    function BlogPostCtrl(PostDAO) {
      this.posts = [];
      
      var postScope = this;
      PostDAO.query().then(function(data) {
        for(var i = 0; i < data.length; i++) {
          postScope.posts.push(data[i]);
        }
      });
    }

    var module = angular.module("exerciseApp");
    module.controller('BlogPostCtrl', ['PostDAO',BlogPostCtrl]);
})();
