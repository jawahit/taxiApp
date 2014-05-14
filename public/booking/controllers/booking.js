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
		alert('hi');
		alert($scope.booking.pickupdatetime);
		BookingService.create($scope.booking,function (err,data){
			if(data.bookingConfirmationResponse.status =="Failure"){
				$scope.failure=true;
			}else{
				$scope.success = true;
				$scope.successdata=data.bookingConfirmationResponse;
			}
		});
	};
	
	$scope.reset =function(){
		$scope.booking=null;
	}
}




