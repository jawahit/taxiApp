/*'use strict';

angular.module('taxiapp.system').controller('HeaderController', ['$scope', '$rootScope', 'Global', 'Menus',
    function($scope, $rootScope, Global, Menus) {
        $scope.global = Global;
        $scope.menus = {};

        // Default hard coded menu items for main menu
        var defaultMainMenu = [{
            'roles': ['annonymous'],
            'title': 'Articles',
            'link': 'all articles'
        }, {
            'roles': ['authenticated'],
            'title': 'Create New Article',
            'link': 'create article'
        },{
        	'roles': ['annonymous'],
            'title': 'Reservation',
            'link': 'new booking'
        },{
        	'roles': ['annonymous'],
            'title': 'Fares',
            'link': 'fares'
        }];

        // Query menus added by modules. Only returns menus that user is allowed to see.
        function queryMenu(name, defaultMenu) {

            Menus.query({
                name: name,
                defaultMenu: defaultMenu
            }, function(menu) {
                $scope.menus[name] = menu;
            });
        }

        // Query server for menus and check permissions
        queryMenu('main', defaultMainMenu);

        $scope.isCollapsed = false;

        $rootScope.$on('loggedin', function() {

            queryMenu('main', defaultMainMenu);

            $scope.global = {
                authenticated: !! $rootScope.user,
                user: $rootScope.user
            };
        });

    }
]);*/