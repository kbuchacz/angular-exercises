(function () {
    'use strict';
    var example = {
      id: 1,
      name: "example",
      pets: ["Dog1", "Cat1"]
    };
    
    function BlogPostCtrl() {
      this.posts = [example];
    }

    var module = angular.module("exerciseApp", []);
    module.controller('BlogPostCtrl', [BlogPostCtrl]);
})();
