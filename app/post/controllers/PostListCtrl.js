(function () {
    'use strict';
    function PostListCtrl(PostDAO, paginationSupport) {
        var ctrl = this;

        this.filter = {searchQuery: null, maxResults: 5};

        var refreshPost = paginationSupport(this, function (callback) {
            PostDAO.query(ctrl.filter).then(function(data){
                ctrl.posts = data.resultList;
                callback(data.totalCount);
            });
        });

        this.deletePost = function(id) {
            PostDAO.remove(id).then(refreshPost);
        };

        refreshPost();
    }

    var module = angular.module("exerciseApp");
    module.controller('PostListCtrl', ['PostDAO', 'paginationSupport', PostListCtrl]);
})();
