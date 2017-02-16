(function () {
    'use strict';

    angular
        .module('homs')
        .directive('homsHeader', homsHeader);

    function homsHeader() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'js/navigation/header.tmpl.html',
            scope: {
                'test': '=',
                // 'dude': 'dude'  // can't add directly to the scope here...
            },
            link: linkFunc,
            controller: 'headerController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;


        function linkFunc(scope, el, attr, ctrl) {
            // console.log('LINK: test = %s *** should be undefined', test);
            // console.log('LINK: something = %s *** should be undefined', something);
            console.log('LINK: scope.test = %s *** should be undefined', scope.test);
            console.log('LINK: scope.something = %s *** should be undefined', scope.something );
            console.log('LINK: scope.dude = %s ', scope.dude );
            console.log('LINK: scope.vm.test = %s', scope.vm.test);
            console.log('LINK: scope.vm.something = %s', scope.vm.something);
            console.log('LINK: ctrl.test = %s', ctrl.test);
            console.log('LINK: ctrl.something = %s', ctrl.something);

            console.log("element:", el);
            console.log("attr:", attr);

            el.on('$destroy', function() {
                // Do any tidy up required.
            });
        }
    }
})();