angular.module('app.status', []);

angular.module('app.status')
    .config(function($routeProvider){
        $routeProvider.when("/status", {
            templateUrl: 'status.html'
        });
        $routeProvider.otherwise({
            templateUrl: 'status.html'
        });

    });

