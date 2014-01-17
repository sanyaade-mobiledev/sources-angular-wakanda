'use strict';

angular.module('angularWakandaFrontApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'wakConnectorModule',
    'wakandaConnect1Module'
])
  .config(['$routeProvider', function ($routeProvider) {
        //there maybe other ways or even services (ones that handles resolve for all routes),
        //for the moment, this should fit in your bootstrap (or be adaptable), whatever way you did it
        //see more on README.md
        var myInjector = angular.injector(['ng','wakConnectorModule']);
        var wakConnectorService = myInjector.get("wakConnectorService");
        var routeResolver = {
            app : function(wakConnectorService){
                return wakConnectorService.initDs();
            }
        };
        $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                })
                .when('/connect1', {
                    templateUrl: 'views/connect1.html',
                    controller: 'Connect1Ctrl'
                })
                .when('/retrieve-infos', {
                    templateUrl: 'views/retrieve-infos.html',
                    controller: 'RetrieveInfosCtrl',
                    resolve: routeResolver
                })
                .when('/example1', {
                    templateUrl: 'views/example1.html',
                    controller: 'Example1Ctrl',
                    resolve: routeResolver
                })
                .when('/example2', {
                    templateUrl: 'views/example2.html',
                    controller: 'Example2Ctrl',
                    resolve: routeResolver
                })
                .otherwise({
                    redirectTo: '/'
                });
  }]);
