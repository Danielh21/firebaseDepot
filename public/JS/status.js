angular.module('app.status', ['ngRoute']);

angular.module('app.status')
    .config(function($routeProvider,$locationProvider ){
        $locationProvider.hashPrefix('');
        $routeProvider.when("/depot", {
            templateUrl: 'depot.html'
        });
        $routeProvider.otherwise({
            templateUrl: 'login.html'
        });

    });

