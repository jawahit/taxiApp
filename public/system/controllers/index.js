'use strict';

angular.module('taxiapp.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
}]);


angular.module('taxiapp.system').controller('CarouselCtrl', ['$scope', 'Global', function ($scope, Global) {
	 $scope.myInterval = 5000;
}]);

angular.module('taxiapp.system').controller('ContactCtrl', ['$scope', 'Global','ContactService', function ($scope, Global,ContactService) {
	$scope.datas={};
	$scope.successdata=null;

	$scope.create = function(){
		ContactService.create($scope.contact,function (err,data){
			if(data.contactConfirmationResponse.status =="Failure"){
				$scope.failure=true;
			}else{
				$scope.success = true;
				$scope.successdata=data.contactConfirmationResponse;
			}
		});
	};
	
	$scope.reset =function(){
		$scope.contact=null;
	}
	
	
}]);