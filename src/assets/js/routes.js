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
            })

    }]);