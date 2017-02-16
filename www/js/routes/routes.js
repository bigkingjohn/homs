angular.module('homs')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'js/navigation/header.tmpl.html',
                        // controller: 'headerController',
                        // controllerAs: 'vm'
                    },
                    'body': {
                        templateUrl: 'js/navigation/body.tmpl.html',
                        // controller: 'bodyController',
                        // controllerAs: 'vm'
                    },
                    'footer': {
                        templateUrl: 'js/navigation/footer.tmpl.html',
                        // controller: 'footerController',
                        // controllerAs: 'vm'
                    }
                }
            })
            .state('project', {
                url: '/p',
                views: {
                    'header': {
                        templateUrl: 'js/navigation/header.tmpl.html',
                        // controller: 'headerController',
                        // controllerAs: 'vm'
                    },
                    'body': {
                        templateUrl: 'js/project/project.tmpl.html',
                        // controller: 'bodyController',
                        // controllerAs: 'vm'
                    },
                    'footer': {
                        templateUrl: 'js/navigation/footer.tmpl.html',
                        // controller: 'footerController',
                        // controllerAs: 'vm'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    });