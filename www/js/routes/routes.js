angular.module('homs')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('header', {
                name: 'headers...',
                url: '/header',
                templateUrl: 'js/navigation/header.tmpl.html'

            })
            .state('footer', {
                name: 'footers...',
                url: '/footer',
                templateUrl: 'js/navigation/footer.tmpl.html'
            });;

            // // setup an abstract state for the tabs directive
            // .state('header', {
            //     url: '/header',
            //     abstract: true,
            //     templateUrl: 'navigation/header.tmpl.html'
            // })
            // // Each tab has its own nav history stack:
            // .state('login', {
            //     url: '/login',
            //     views: {
            //         'tab-login': {
            //             // template: '<html><body><p>login</p><p>login</p><p>login</p><body></html>',
            //             templateUrl: 'src/login/login.html',
            //             controller: 'loginController',
            //             controllerAs: 'vm'
            //       }
            //     }
            // });

        // if none of the above states are matched, use this as the fallback
        // $urlRouterProvider.otherwise('/tab/registration');

    });