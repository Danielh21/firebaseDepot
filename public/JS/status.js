angular.module('app.status', ['ngRoute']);

angular.module('app.status')
    .config(function($routeProvider,$locationProvider ){
        $locationProvider.hashPrefix('');
        $routeProvider.when("/depot", {
            template: "<status-dir childobj=\"Depot\"></status-dir>"
        });
        $routeProvider.when("/parkenA", {
            template: "<status-dir childobj=\"Parken-Alfa\"></status-dir>"
        });
        $routeProvider.otherwise({
            templateUrl: 'login.html'
        });

    });

