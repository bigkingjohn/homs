(function () {
    'use strict';

    angular
        .module('homs')
        .directive('designerBio', designerBio);

    designerBio.$inject = [];

    function designerBio() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                // @: one way string binding, =: two way binding, &: function
                imageUrl: '=',
                imageStyle: '=',
                name: '=',
                bio: '=',
                homepageUrl: '=',
                homepageTitle: '=',
            },
            link: linkFunc,
            templateUrl: 'js/pages/designers/designer.tmpl.html',
            // controller: 'designersController',
            // controllerAs: 'vm',
            // bindToController: true,
        }

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }
})();