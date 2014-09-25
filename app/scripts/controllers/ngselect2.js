'use strict';

/**
 * @ngdoc function
 * @name ngselect2App.controller:Ngselect2Ctrl
 * @description
 * # Ngselect2Ctrl
 * Controller of the ngselect2App
 */
angular.module('ngselect2App').controller('Ngselect2Ctrl', function ($scope, $resource, Artist) {
    var ctrlScope = this;
    this.counter = 1;
    this.artists = {results: []};
    console.log(this.time);

    this.search=function (query) {
        Artist.get(query.term).then(function(data) {
            var length = data.artist.length;
            ctrlScope.artists.results = [];

            for(var i = 0; i < length; i++) {
                ctrlScope.artists.results.push({id: 'sd' + (ctrlScope.counter++),
                              text: data.artist[i].name});
            }
            console.log(ctrlScope.artists);
            query.callback(ctrlScope.artists);
        });
    };

    this.select2options = {
        multiple: true,
        minimumInputLength: 1,
        maximumSelectionSize: 10,
        query: function(query) {
            ctrlScope.search(query);
        }
    };

});