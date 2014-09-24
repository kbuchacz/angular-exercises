'use strict';

/**
 * @ngdoc function
 * @name ngflowApp.controller:NgflowCtrl
 * @description
 * # NgflowCtrl
 * Controller of the ngflowApp
 */
angular.module('ngflowApp').controller('uploadCtrl', function ($scope) {
    var ctrl = this;
    this.flowCompleteFlag = false;

    this.image = undefined;
    this.file = undefined;

    this.startUpload = function(flow,files){
      flow.upload();
    };

    this.fileSuccess = function(file,message){
      ctrl.image = JSON.parse(message);
    };
    
    this.showImage = function(file) {
      if(file.file.type.search('image') !== -1) {
        return file;
      }
      return undefined;
    };

    this.flowComplete=function(){
        this.flowCompleteFlag = true;
    };

});