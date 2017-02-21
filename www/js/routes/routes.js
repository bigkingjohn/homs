angular
    .module('homs')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'js/project/project.tmpl.html',
                controller: 'projectController',
                controllerAs: 'vm'
            })
            .state('test', {
                url: '/xx',
                templateUrl: 'js/navigation/body.tmpl.html',
                // controller: 'projectController',
                // controllerAs: 'vm'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    });