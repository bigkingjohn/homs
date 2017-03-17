(function () {
    'use strict';

    angular
        .module('homs')
        .directive('yarnSource', yarnSource);

    yarnSource.$inject = [];

    function yarnSource() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                // @: one way string binding, =: two way binding, &: function
                url: '=',
                imageUrl: '=',
            },
            link: linkFunc,
            templateUrl: 'js/pages/yarns/yarnsource.tmpl.html',
        }

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }
})();