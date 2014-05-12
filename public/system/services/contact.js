angular.module('taxiapp.system').factory('ContactService', ['$http', function($http) {

	return {
		create : function (data,callback){
		 	$http({
	            url: '/contact',
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
