(function () {
    'use strict';

    angular
        .module('homs')
        .directive('homsFooter', homsFooter);

    homsFooter.$inject = [];

    function homsFooter() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {},
            link: linkFunc,
            templateUrl: 'js/navigation/footer.tmpl.html',
            controller: 'footerController',
            controllerAs: 'vm',
            bindToController: true,
        }

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }
})();