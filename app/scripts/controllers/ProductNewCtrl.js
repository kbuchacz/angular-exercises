(function () {
    'use strict';
    function ProductNewCtrl(ProductDAO, $location) {
        var ctrl = this;

        this.addProduct = function() {
            var exp = /\$?(\d+\.?\d*)/.exec(this.details.price),
                value;
            if(exp != null) {
                console.log(exp);
                exp[1].search('.') !== -1 ?
                    value = parseFloat(exp[1]) :
                    value = parseInt(exp[1]);

                this.details.price = value;
                ProductDAO.add(ctrl.details);
                $location.path('/');
            }
            else {
                alert('Price must be a number!');
            }
        }
    }

    var module = angular.module("exerciseApp");
    module.controller('ProductNewCtrl', ['ProductDAO', '$location', ProductNewCtrl]);
})();
