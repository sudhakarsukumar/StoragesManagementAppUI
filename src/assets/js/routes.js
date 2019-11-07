angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'views/shared/layouts/_base.html',
            })
            .state('app.main', {
                url: '/dashboard',
                templateUrl: 'views/main.html',
                controller: 'sessionOverviewCtrl'
            })
            .state('appSimple', {
                abstract: true,
                templateUrl: 'views/shared/layouts/simple.html',
            })

        // Additional Pages
        .state('appSimple.login', {
                url: '/login',
                templateUrl: 'views/pages/login.html'
            })
            .state('appSimple.register', {
                url: '/register',
                templateUrl: 'views/pages/register.html'
            })
            .state('appSimple.404', {
                url: '/404',
                templateUrl: 'views/pages/404.html'
            })
            .state('appSimple.500', {
                url: '/500',
                templateUrl: 'views/pages/500.html'
            })
    }]);