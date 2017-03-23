(function () {
    'use strict';

    angular
        .module('homs')
        .directive('imageCarousel', imageCarousel);

    imageCarousel.$inject = [];

    function imageCarousel() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                items: '='
            },
            link: linkFunc,
            templateUrl: 'js/pages/shareddirectives/carousel.tmpl.html',
            controller: 'carouselController',
            controllerAs: 'vm',
            bindToController: true,
        }

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
            // ctrl.items = items;
        }
    }
})();