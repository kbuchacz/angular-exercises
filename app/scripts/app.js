'use strict';

/**
 * @ngdoc overview
 * @name ngflowApp
 * @description
 * # ngflowApp
 *
 * Main module of the application.
 */
angular.module('ngflowApp', ['ngRoute', 'flow']).config(function ($routeProvider, flowFactoryProvider) {
    $routeProvider
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'uploadCtrl as upload'
      })
      .otherwise({
        redirectTo: '/upload'
      });
  });
