'use strict';

//Setting up route
angular.module('taxiapp.system').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            // For unmatched routes:
            $urlRouterProvider.otherwise('/');

            // states for my app
            $stateProvider              
                .state('home', {
                    url: '/',
                    templateUrl: 'public/system/views/index.html'
                })
                .state('auth', {
                    templateUrl: 'public/auth/views/index.html'
                })
                .state('fares', {
                    templateUrl: 'public/system/views/fares.html'
                })
                .state('contact', {
                    templateUrl: 'public/system/views/contact.html'
                })
                .state('services', {
                	url: '/services',
                    templateUrl: 'public/system/views/services.html'
                })
                /*.state('new booking', {
                    url: '/booking',
                    templateUrl: 'public/booking/views/home.html'
                })*/;
        }
    ])
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);
