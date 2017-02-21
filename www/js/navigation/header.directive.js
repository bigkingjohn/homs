(function () {
    'use strict';

    angular
        .module('homs')
        .directive('homsHeader', homsHeader);

    homsHeader.$inject = [];

    function homsHeader() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {},
            link: linkFunc,
            templateUrl: 'js/navigation/header.tmpl.html',
            controller: 'headerController',
            controllerAs: 'vm',
            bindToController: true,
        }

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }
})();