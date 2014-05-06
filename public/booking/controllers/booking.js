'use strict';

angular.module('taxiapp.booking',[]).controller('WizardCtrl',WizardCtrl);

function WizardCtrl($scope,$stateParams){
	  $scope.bazinga = {name: 'Sheldon'};
	  
	  $scope.makeServiceCall = function(){
	    alert($scope.bazinga.name + $scope.bazinga.age);
	  };
	
}

angular.module('taxiapp.booking',[]).controller('BookingCtrl',BookingCtrl);

function BookingCtrl($scope,$stateParams,$location,$http,BookingService){

  	$scope.create = function(){
  		BookingService.create($scope.booking);
	};
}




