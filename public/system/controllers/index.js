'use strict';

angular.module('taxiapp.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
}]);


angular.module('taxiapp.system').controller('CarouselCtrl', ['$scope', 'Global', function ($scope, Global) {
	 $scope.myInterval = 5000;
	 /* var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length;
	    slides.push({
	      image: 'http://placehold.it/900x500/auto/',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }*/
}]);