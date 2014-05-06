'use strict';

angular.module('taxiapp.system').factory('Menus', ['$resource', function($resource) {
    return $resource('admin/menu/:name', {
        name: '@name',
        defaultMenu: '@defaultMenu'
    });
}]);