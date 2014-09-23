(function() {
  'use strict';
  function BrainCandyDetailsCtrl(CandyDAO, $routeParams, $location) {
    var ctrlScope = this;
    
    this.details = {};
    this.saveCandy = function() {
      CandyDAO.save(ctrlScope.details).then(function() {
        $location.path('#/');
      });
    };
    
    CandyDAO.get($routeParams.id).then(function(data) {
      ctrlScope.details = data;
    });
  }
  
  var app = angular.module('exerciseApp');
  app.controller('BrainCandyDetailsCtrl', ['CandyDAO', '$routeParams', '$location', BrainCandyDetailsCtrl]);
})();