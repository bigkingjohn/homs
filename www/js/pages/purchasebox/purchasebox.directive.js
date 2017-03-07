(function () {
    'use strict';

    angular
        .module('homs')
        .directive('purchaseBox', purchaseBox);

    purchaseBox.$inject = [];

    function purchaseBox() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {},
            link: linkFunc,
            templateUrl: 'js/pages/purchasebox/purchasebox.tmpl.html',
            controller: 'purchaseBoxController',
            controllerAs: 'vm',
            bindToController: true,
        }

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }
})();