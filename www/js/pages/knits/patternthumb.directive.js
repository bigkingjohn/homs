(function () {
    'use strict';

    angular
        .module('homs')
        .directive('patternThumb', patternThumb);

    patternThumb.$inject = [];

    function patternThumb() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                // @: one way string binding, =: two way binding, &: function
                url: '=',
                imageUrl: '=',
                name: '=',
                designer: '=',
                onClick: '&',
            },
            link: linkFunc,
            templateUrl: 'js/pages/knits/patternthumb.tmpl.html',
            // controller: 'patternThumbController',
            // controllerAs: 'vm',
            // bindToController: true,
        }

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }
})();