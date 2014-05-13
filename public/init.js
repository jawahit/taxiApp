'use strict';




angular.element(document).ready(function() {
    //Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') window.location.hash = '#!';

    //Then init the app
    angular.bootstrap(document, ['taxiapp']);

});

//Dynamically add angular modules declared by packages
var packageModules = [];
for (var index in window.modules) {
    angular.module(window.modules[index].module, (window.modules[index].angularDependencies?window.modules[index].angularDependencies:[]));
    packageModules.push(window.modules[index].module);
}

// Default modules
var modules = ['ngCookies', 'ngResource', 'ui.router', 'ui.bootstrap','ui.bootstrap.datetimepicker','ui.bootstrap.collapse', 'ui.bootstrap.dropdownToggle', 'mean.articles', 'mean.auth','taxiapp.system','taxiapp.booking'];
modules = modules.concat(packageModules);

// Combined modules
angular.module('taxiapp', modules);

