angular
    .module('homs')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('project', {
                url: '/',
                templateUrl: 'js/pages/project/project.tmpl.html',
                controller: 'projectController',
                controllerAs: 'vm'
            })
            .state('knits', {
                url: '/knits',
                templateUrl: 'js/pages/knits/knits.tmpl.html',
                controller: 'knitsController',
                controllerAs: 'vm'
            })
            .state('designers', {
                url: '/designers',
                templateUrl: 'js/pages/designers/designers.tmpl.html',
                controller: 'designersController',
                controllerAs: 'vm'
            })
            .state('yarns', {
                url: '/yarns',
                templateUrl: 'js/pages/yarns/yarns.tmpl.html',
                controller: 'yarnsController',
                controllerAs: 'vm'
            })
            .state('againstmalaria', {
                url: '/againstmalaria',
                templateUrl: 'js/pages/againstmalaria/againstmalaria.tmpl.html',
                controller: 'againstmalariaController',
                controllerAs: 'vm'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'js/pages/contact/contact.tmpl.html',
                controller: 'contactController',
                controllerAs: 'vm'
            })
            .state('pattern', {
                url: '/pattern',
                templateUrl: 'js/pages/patterns/pattern.tmpl.html',
                controller: 'patternController',
                controllerAs: 'vm'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    });