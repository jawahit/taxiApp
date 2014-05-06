'use strict';


//Booking service used for articles REST endpoint
angular.module('taxiapp.booking').factory('BookingServiceResource', ['$resource', function($resource) {
    return $resource('articles/:articleId', {
        bookingId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);


angular.module('taxiapp.booking').service('BookingService', ['$http', function($http) {
    
	this.create = function (data){
		alert(data.name);
		
		$http({
            url: '',
            method: "POST",
            data: data
        }).success(function (data, status, headers, config) {
                $scope.booking = data; // assign  $scope.persons here as promise is resolved here 
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
		return data;
	};
	
}]);