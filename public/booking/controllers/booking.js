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
	
	$scope.datas={};
	$scope.successdata=null;

	$scope.create = function(){
		$scope.showprogress=true;
		BookingService.create($scope.booking,function (err,data){
			if(data.bookingConfirmationResponse.status =="Failure"){
				$scope.showprogress=false;
				$scope.failure=true;
			}else{
				$scope.showprogress=false;
				$scope.success = true;
				$scope.successdata=data.bookingConfirmationResponse;
			}
		});
	};
	
	$scope.reset =function(){
		$scope.booking=null;
	}
}




