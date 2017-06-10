(function () {
    'use strict';

    angular
        .module('homs')
        .directive('carousel', carousel);

    carousel.$inject = [];

    function carousel() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                images: '=',
            },
            link: linkFunc,
            templateUrl: 'js/pages/carousel/carousel.html',
            controller: 'carouselController',
            controllerAs: 'vm',
            bindToController: true,
        }

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }
})();