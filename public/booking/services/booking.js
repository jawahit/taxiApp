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


angular.module('taxiapp.booking').service('BookingService', ['$http','$filter', function($http,$filter) {
    
	return {
		create : function (data,callback){
			data.pickupdatetime=$filter('date')(data.pickupdatetime, "MM/dd/yyyy hh:mm:ss a");
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