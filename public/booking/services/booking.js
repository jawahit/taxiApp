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
    
	return {
		create : function (data,callback){
		 	$http({
	            url: '/booking',
	            method: "POST",
	            data: data
	        })
	        .success(function(data){
	        	return callback(null,data);
	        })
	        .error(function(data) {
	            return callback(true, null);
	        });
		}
	};
	
}]);