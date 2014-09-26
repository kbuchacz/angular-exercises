(function () {
    'use strict';
    var module = angular.module("exerciseApp", ['ngResource', 'ngRoute']);

    module.directive('currency', ['$filter', function ($filter) {
        return {
            require: 'ngModel',
            link: function (elem, $scope, attrs, ngModel) {
                ngModel.$formatters.push(function (val) {
                    return $filter('currency')(val)
                });
                ngModel.$parsers.push(function (val) {
                    return val.replace(/[\$,]/, '')
                });
            }
        }
    }]);

    module.config(function ($provide, $routeProvider) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        $routeProvider.when('/', {
            templateUrl: 'views/productList.html',
            controller: 'ProductListCtrl as productList'
        });
        $routeProvider.when('/details/:id', {
            templateUrl: 'views/productDetails.html',
            controller: 'ProductDetailsCtrl as productDetails'
        });
        $routeProvider.when('/new', {
            templateUrl: 'views/productNew.html',
            controller: 'ProductNewCtrl as productNew'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    module.run(function ($httpBackend) {
        var sequence = 1;
        var products = {};
        [
            {   id: sequence++,
                product: 'Rumianek',
                price: '200'
            },
            {   id: sequence++,
                product: 'JSON prawde Ci powie',
                price: '100'
            }
        ].every(function (value) {
                products[value.id] = value;
                return true;
            });

        $httpBackend.whenGET(/\/api\/product\/(\d+)$/).respond(function(method, url) {
            var param = /\/api\/product\/(\d+)$/.exec(url);
            if(param) {
                return [200, products[parseInt(param[1], 10)]];
            }
            return [404];
        });

        $httpBackend.whenGET(/\/api\/product/).respond(function(method, url) {
            return [200, products];
        });

        $httpBackend.whenPUT(/\/api\/product\/new/).respond(function(method, url, data) {
            if(!data) {
                return [400];
            }
            var result = JSON.parse(data);
            result.id = sequence;
            products[sequence++] = result;
            return [200];
        });

        $httpBackend.whenPOST(/\/api\/product/).respond(function(method, url, data) {
            if(!data) {
                return [400];
            }
            var result = JSON.parse(data);
            products[result.id] = result;
            return [200];
        });

        $httpBackend.whenDELETE(/\/api\/product\/(\d+)$/).respond(function(method, url) {
            var param = /\/api\/product\/(\d+)$/.exec(url);
            if(param) {
                delete products[parseInt(param[1], 10)];
                return [200];
            }
            return [400];
        });

        $httpBackend.whenGET(/views\/.+\.html/).passThrough();
    });

})();
