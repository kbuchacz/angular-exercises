(function() {
  'use strict';  
  function BrainCandyListCtrl(CandyDAO) {
    var ctrlScope = this;
    
    this.details = {};
    this.deleteCandy = function(id) {
      CandyDAO.remove(id).then(function() {
        for(var key in ctrlScope.details)  {
          if(ctrlScope.details[key].id === id) {
            delete ctrlScope.details[key];
          }
        }
      });
    };
    
    CandyDAO.query().then(function(data) {
      ctrlScope.details = data;
    });
  }
  
  var app = angular.module('exerciseApp');
  app.controller('BrainCandyListCtrl', ['CandyDAO', BrainCandyListCtrl]);
})();